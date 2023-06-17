import { useEffect } from "react";
import classNames from "classnames";
import { FiMove } from "react-icons/fi";

import { useShapes } from "../../../context/ShapesContext";

import "./shapeList.scss";

const ShapeList = ({ isVisible }) => {
  const shapes = useShapes();

  return (
    <div
      className={classNames("shapeList", {
        hidden: isVisible,
      })}
    >
      <div> &lt; </div>
      <div>
        {shapes.map((shape) => (
          <div key={shape.id}> {shape.text} </div>
        ))}
      </div>
    </div>
  );
};

export default ShapeList;
