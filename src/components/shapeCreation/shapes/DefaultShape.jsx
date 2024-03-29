import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import { useShapesDispatch } from "../../../context/ShapesContext";
import useAutosizeTextArea from "../../shared/hooks/useAutosizeTextArea";

import "./shapes.scss";

const DefaultShape = ({ shape }) => {
  const shapesDispatch = useShapesDispatch();

  const [text, setText] = useState(shape.text);
  const textAreaRef = useRef();
  useAutosizeTextArea(textAreaRef.current, text);

  const handleInputBlur = (e) => {
    shapesDispatch({
      type: "changed",
      shape: { ...shape, editable: false, text: text },
    });
  };

  useEffect(() => {
    if (shape.editable) textAreaRef.current.focus();
  }, [shape.editable]);

  return (
    <textarea
      ref={textAreaRef}
      className={classNames("defaultShape")}
      style={{
        /* top: `${shape.y}px`,
        left: `${shape.x}px`, */
        minHeight: `${shape.height}px`,
        width: `${shape.width}px`,
      }}
      type="text"
      value={text}
      onChange={(e) => shape.editable && setText(e.target.value)}
      onBlur={handleInputBlur}
      // contentEditable={shape.selected ? "true" : "false"}
    ></textarea>
  );
};

export default DefaultShape;
