import { useState } from "react";
import classNames from "classnames";

import "./shapes.scss";

const NameShape = ({ shape }) => {
  return (
    <div
      className={classNames("nameShape")}
      /* style={{
        top: `${shape.y}px`,
        left: `${shape.x}px`,
      }} */
    >
      {shape.text}
    </div>
  );
};

export default NameShape;
