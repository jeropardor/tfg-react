import { useState } from "react";
import classNames from "classnames";

import "./shapes.scss";

const DefaultShape = ({ shape }) => {
  return (
    <div
      key={shape.id}
      className={classNames("defaultShape")}
      style={{
        /* top: `${shape.y}px`,
        left: `${shape.x}px`, */
        "min-height": `${shape.height}px`,
        width: `${shape.width}px`,
      }}
      contentEditable={shape.selected ? "true" : "false"}
    >
      {shape.text}
    </div>
  );
};

export default DefaultShape;
