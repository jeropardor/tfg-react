import { useState } from "react";
import classNames from "classnames";

import "./shapes.scss";
import { useShapesDispatch } from "../../../context/ShapesContext";

const DefaultShape = ({ shape }) => {
  const shapesDispatch = useShapesDispatch();

  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleSelected = () => {
    shapesDispatch({
      type: "selected",
      id: shape.id,
    });
  };

  return (
    <div
      key={shape.id}
      className={classNames("shape defaultShape", {
        "dis-hidden": !shape.visible,
        selected: shape.selected,
      })}
      style={{
        top: `${shape.y}px`,
        left: `${shape.x}px`,
        "min-height": `${shape.height}px`,
        width: `${shape.width}px`,
      }}
      contentEditable={shape.selected ? "true" : "false"}
      onClick={handleSelected}
    >
      {shape.text}
    </div>
  );
};

export default DefaultShape;
