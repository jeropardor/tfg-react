import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import { useShapesDispatch } from "../../../context/ShapesContext";

import "./shapes.scss";

const NameShape = ({ shape }) => {
  const shapesDispatch = useShapesDispatch();

  const inputRef = useRef();
  const [text, setText] = useState(shape.text);

  const handleInputBlur = (e) => {
    shapesDispatch({
      type: "changed",
      shape: { ...shape, editable: false, text: text },
    });
  };

  useEffect(() => {
    if (shape.editable) inputRef.current.focus();
  }, [shape.editable]);

  useEffect(() => {
    inputRef.current.parentNode.dataset.value = text;
  }, [text]);

  return (
    <div className={classNames("nameShape")}>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={text}
          size={1}
          onChange={(e) => shape.editable && setText(e.target.value)}
          onBlur={handleInputBlur}
          /* style={{
            top: `${shape.y}px`,
            left: `${shape.x}px`,
          }} */
        />
      </div>
    </div>
  );
};

export default NameShape;
