import ZoomWrapper from "../shared/zoomComponent/ZoomWrapper";

import "./view.scss";

const View = () => {
  return (
    <div className="view-window">
      <ZoomWrapper>
        <div className="view-mock"> view </div>
      </ZoomWrapper>
    </div>
  );
};

export default View;
