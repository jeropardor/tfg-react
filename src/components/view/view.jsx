import { useState } from "react";

import DragZoomWrapper from "../shared/zoomComponent/DragZoomWrapper";

import "./view.scss";
import ShapeCreation from "../shapeCreation/ShapeCreation";

const View = () => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);

  return (
    <div className="view">
      {image ? (
        <DragZoomWrapper scale={scale} setScale={setScale}>
          <ShapeCreation scale={scale}>
            <div className="view-image-container">
              <img draggable="false" src={URL.createObjectURL(image)} alt="" />
            </div>
          </ShapeCreation>
        </DragZoomWrapper>
      ) : (
        <input
          type="file"
          name="image"
          onChange={(event) => setImage(event.target.files[0])}
        />
      )}
    </div>
  );
};

export default View;
