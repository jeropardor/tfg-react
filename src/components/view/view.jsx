import { useState } from "react";

import DragZoomWrapper from "../shared/zoomComponent/DragZoomWrapper";

import "./view.scss";

const SCALE_FACTOR = 0.8;

const View = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="view">
      {image ? (
        <DragZoomWrapper>
          <div className="view-image-container">
            <img
              draggable="false"
              src={URL.createObjectURL(image)}
              alt="view image"
            />
          </div>
        </DragZoomWrapper>
      ) : (
        <input
          type="file"
          name="image"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setImage(event.target.files[0]);
          }}
        />
      )}
    </div>
  );
};

export default View;
