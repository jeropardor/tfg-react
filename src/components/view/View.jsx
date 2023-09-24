import { useState } from "react";

import { useViewer } from "../../context/ViewerContext";
import DragZoomWrapper from "../shared/zoomComponent/DragZoomWrapper";
import ShapeCreation from "../shapeCreation/ShapeCreation";
import FileImport from "./FileImport";

import "./view.scss";

const View = () => {
  const { viewer } = useViewer();

  return (
    <div className="view">
      {viewer.image ? (
        <DragZoomWrapper>
          <ShapeCreation>
            <div className="view-image-container">
              <img
                draggable="false"
                src={URL.createObjectURL(viewer.image)}
                alt=""
              />
            </div>
          </ShapeCreation>
        </DragZoomWrapper>
      ) : (
        <FileImport />
      )}
    </div>
  );
};

export default View;
