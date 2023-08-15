import { useState } from "react";
import classNames from "classnames";

import "./shapes.scss";

const NameShape = ({ shape }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  return (
    <div
      key={shape.id}
      className={classNames("shape nameShape", {
        "dis-hidden": !shape.visible,
      })}
      style={{
        top: `${shape.y}px`,
        left: `${shape.x}px`,
      }}
    >
      {shape.text}
    </div>
  );
};

export default NameShape;
