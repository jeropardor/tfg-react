import classNames from "classnames";

import { FiZoomIn } from "react-icons/fi";
import { FiZoomOut } from "react-icons/fi";
import { FiMaximize } from "react-icons/fi";
import { FiMove } from "react-icons/fi";
import IconClickWrapper from "../icons/IconClickWrapper";

import "./zoom.scss";

const ZoomButtons = ({
  isMoving,
  setIsMoving,
  resetPosition,
  handleScaleUp,
  handleScaleDown,
}) => {
  return (
    <div className="zoomButtons">
      <IconClickWrapper
        icon={<FiMove />}
        onClick={() => setIsMoving((b) => !b)}
        className={classNames({
          "zoomButton-selected": isMoving,
        })}
      />
      <IconClickWrapper icon={<FiZoomIn />} onClick={handleScaleUp} />
      <IconClickWrapper icon={<FiZoomOut />} onClick={handleScaleDown} />
      <IconClickWrapper icon={<FiMaximize />} onClick={resetPosition} />
    </div>
  );
};

export default ZoomButtons;
