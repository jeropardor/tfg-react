import { useState } from "react";
import JSZip from "jszip";

import { useViewer } from "../../context/ViewerContext";
import { useShapesDispatch } from "../../context/ShapesContext";

import "./view.scss";

const FileImport = () => {
  const { setViewer } = useViewer();
  const shapesDispatch = useShapesDispatch();

  const processFiles = (files) => {
    const allowedImageTypes = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "image/gif",
    ];
    const allowedZipTypes = [
      "zip",
      "application/octet-stream",
      "application/zip",
      "application/x-zip",
      "application/x-zip-compressed",
    ];

    // image
    if (allowedImageTypes.includes(files[0]?.type)) {
      files[0]._name = files[0].name.match(/(.+?)(\.[^.]*$|$)/)[1];
      setViewer((viewer) => ({ ...viewer, image: files[0] }));
      return;

      // zip
    } else if (allowedZipTypes.includes(files[0]?.type)) {
      JSZip.loadAsync(files[0]).then((files) => {
        var shapesFile = null;
        var imageFile = null;
        files.forEach((relativePath, file) => {
          if (file.name === "shapes.json") shapesFile = file;
          else if (
            allowedImageTypes.includes("image/" + file.name.match(/[^.]+$/)[0])
          )
            file._name = file.name.match(/(.+?)(\.[^.]*$|$)/)[1];
          imageFile = file;
        });

        if (shapesFile && imageFile) {
          imageFile.async("blob").then((blob) => {
            console.log(blob);
            blob._type = "image/" + imageFile.name.match(/[^.]+$/)[0];
            setViewer((viewer) => ({
              ...viewer,
              image: blob,
            }));
          });
          shapesFile.async("text").then((text) => {
            shapesDispatch({
              type: "imported",
              shapes: JSON.parse(text),
            });
          });
        }
      });

      // error
    } else {
      console.log("ERROR"); // TODO: implementar errores
    }
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        onChange={(e) => processFiles(e.target.files)}
      />
    </div>
  );
};

export default FileImport;
