import classNames from "classnames";

import ShapeListElement from "./ShapeListElement";
import { useShapes } from "../../context/ShapesContext";

import "./shapeList.scss";

const ShapeList = ({ handleCentering, isVisible }) => {
  const shapes = useShapes();

  return (
    <div
      className={classNames("shapeList", {
        "dis-hidden": !isVisible,
      })}
    >
      <div>
        {shapes.map((shape) => (
          <ShapeListElement
            key={shape.id}
            handleCentering={handleCentering}
            shape={shape}
          />
        ))}
      </div>
    </div>
  );
};

export default ShapeList;
