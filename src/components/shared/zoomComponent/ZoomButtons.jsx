import { useEffect } from "react";
import classNames from "classnames";
import { FiZoomIn, FiZoomOut, FiMaximize, FiMove } from "react-icons/fi";

import IconClickWrapper from "../icons/IconClickWrapper";
import { Modes, useMode } from "../../../context/ModeContext";

import "./zoom.scss";

const ZoomButtons = ({
  isMoving,
  setIsMoving,
  resetPosition,
  handleScaleUp,
  handleScaleDown,
}) => {
  const { mode, setMode } = useMode();

  useEffect(() => {
    if (mode == Modes.Create) setIsMoving(false);
  }, [mode]);

  return (
    <div className="zoomButtons">
      <IconClickWrapper
        icon={<FiMove />}
        onClick={() => {
          setIsMoving((b) => !b);
          setMode((oldMode) =>
            oldMode == Modes.Create ? Modes.Defaut : oldMode
          );
        }}
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
