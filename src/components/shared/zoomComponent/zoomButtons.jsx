import { FiZoomIn } from "react-icons/fi";
import { FiZoomOut } from "react-icons/fi";
import { FiMaximize } from "react-icons/fi";

import "./zoom.scss";
import IconClickWrapper from "../icons/iconClickWrapper";

const ZoomButtons = () => {
  return (
    <div className="zoomButtons">
      <IconClickWrapper icon={<FiZoomIn />} />
      <IconClickWrapper icon={<FiZoomOut />} />
      <IconClickWrapper icon={<FiMaximize />} />
    </div>
  );
};

export default ZoomButtons;
