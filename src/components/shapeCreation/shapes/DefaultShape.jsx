import { useState } from "react";
import classNames from "classnames";

import "./shapes.scss";

const DefaultShape = ({ shape }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  return (
    <div
      key={shape.id}
      className={classNames("shape defaultShape", {
        "dis-hidden": !shape.visible,
      })}
      style={{
        top: `${shape.y}px`,
        left: `${shape.x}px`,
        height: `${shape.height}px`,
        width: `${shape.width}px`,
      }}
    >
      {shape.text}
    </div>
  );
};

export default DefaultShape;
