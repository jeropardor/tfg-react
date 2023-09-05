import { useEffect } from "react";
import classNames from "classnames";
import { FiZoomIn, FiZoomOut, FiMaximize, FiMove } from "react-icons/fi";

import IconClickWrapper from "../icons/IconClickWrapper";
import { Modes, useMode } from "../../../context/ModeContext";

import "./zoom.scss";

const ZoomButtons = ({ resetPosition, handleScaleUp, handleScaleDown }) => {
  const { mode, setMode } = useMode();

  return (
    <div className="zoomButtons">
      <IconClickWrapper
        icon={<FiMove />}
        onClick={() => setMode(Modes.Defaut)}
        className={classNames({
          "zoomButton-selected": mode === Modes.Defaut,
        })}
      />
      <IconClickWrapper icon={<FiZoomIn />} onClick={handleScaleUp} />
      <IconClickWrapper icon={<FiZoomOut />} onClick={handleScaleDown} />
      <IconClickWrapper icon={<FiMaximize />} onClick={resetPosition} />
    </div>
  );
};

export default ZoomButtons;
