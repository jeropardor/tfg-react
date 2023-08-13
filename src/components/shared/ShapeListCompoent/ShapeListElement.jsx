import classNames from "classnames";
import { useShapes } from "../../../context/ShapesContext";

import "./shapeList.scss";

const ShapeListElement = ({ children }) => {
  const shapes = useShapes();

  return <div className={classNames("shapeListElement")}>{children}</div>;
};

export default ShapeListElement;
