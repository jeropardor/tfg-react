import { useState } from "react";

import DragZoomWrapper from "../shared/zoomComponent/DragZoomWrapper";

import "./view.scss";

const View = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="view">
      {image ? (
        <DragZoomWrapper>
          <div className="view-image-container">
            <img draggable="false" src={URL.createObjectURL(image)} alt="" />
          </div>
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
