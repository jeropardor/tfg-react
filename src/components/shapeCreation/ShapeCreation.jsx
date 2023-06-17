import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { Modes, useMode } from "../../context/ModeContext";
import { useShapes, useShapesDispatch } from "../../context/ShapesContext";

import "./shape.scss";

const ShapeCreation = ({ scale, children }) => {
  const shapesList = useShapes();
  const shapesDispatch = useShapesDispatch();

  const { mode, setMode } = useMode();

  const containerRef = useRef();
  const newDivRef = useRef();
  const [newDivPos, setNewDivPos] = useState({ x: 0, y: 0 });
  const [newDivLen, setNewDivLen] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    if (mode !== Modes.Create) setIsMouseDown(false);
  }, [mode]);

  const handleMouseDown = (e) => {
    if (mode !== Modes.Create) return;
    setNewDivStart(e);
    setNewDivLen({ x: 0, y: 0 });
    setIsMouseDown(true);
  };

  const handleMouseUp = (e) => {
    setIsMouseDown(false);
    if (mode === Modes.Create) addDefaultShape();
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    setNewDivEnd(e);
  };

  const setNewDivStart = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / scale;
    const y = (e.clientY - rect.top) / scale;
    setNewDivPos({ x: x, y: y });
  };

  const setNewDivEnd = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / scale - newDivPos.x;
    const y = (e.clientY - rect.top) / scale - newDivPos.y;
    setNewDivLen({ x: x, y: y });
  };

  const resetNewDiv = () => {
    setIsMouseDown(false);
    setMode(Modes.Defaut);
    setNewDivPos({ x: 0, y: 0 });
    setNewDivLen({ x: 0, y: 0 });
  };

  const addDefaultShape = () => {
    shapesDispatch({
      type: "added",
      text: "placeholder",
      position: {
        x: newDivPos.x,
        y: newDivPos.y,
        width: newDivLen.x,
        height: newDivLen.y,
      },
    });
    resetNewDiv();
  };

  return (
    <div
      ref={containerRef}
      className={classNames("shapeCreation", { create: mode === Modes.Create })}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div
        className="newDiv"
        style={{
          top: `${newDivPos.y}px`,
          left: `${newDivPos.x}px`,
          height: `${newDivLen.y}px`,
          width: `${newDivLen.x}px`,
        }}
      ></div>
      {shapesList.map((shape) => (
        <div
          key={shape.id}
          className="shape"
          style={{
            top: `${shape.y}px`,
            left: `${shape.x}px`,
            height: `${shape.height}px`,
            width: `${shape.width}px`,
          }}
        >
          {shape.text}
        </div>
      ))}
      {children}
    </div>
  );
};

export default ShapeCreation;
