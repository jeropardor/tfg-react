import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { Modes, useMode } from "../../context/ModeContext";

import "./shape.scss";

const ShapeCreation = ({ scale, children }) => {
  const [shapes, setShapes] = useState([]);
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
    setMode(Modes.Defaut);
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
      {children}
    </div>
  );
};

export default ShapeCreation;
