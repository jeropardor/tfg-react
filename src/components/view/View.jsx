import { useState } from "react";

import DragZoomWrapper from "../shared/zoomComponent/DragZoomWrapper";

import "./view.scss";
import ShapeCreation from "../shapeCreation/ShapeCreation";
import { useViewer } from "../../context/ViewerContext";

const View = () => {
  const { viewer, setViewer } = useViewer();

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
        <input
          type="file"
          name="image"
          onChange={(e) =>
            setViewer((viewer) => ({ ...viewer, image: e.target.files[0] }))
          }
        />
      )}
    </div>
  );
};

export default View;
