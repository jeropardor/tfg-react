import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { Modes, useMode } from "../../context/ModeContext";
import {
  ShapeTypes,
  useShapes,
  useShapesDispatch,
} from "../../context/ShapesContext";
import { useViewer } from "../../context/ViewerContext";

import "./shape.scss";

const ShapeCreation = ({ children }) => {
  const { viewer } = useViewer();
  const shapesList = useShapes();
  const shapesDispatch = useShapesDispatch();

  const { mode, setMode } = useMode();

  const containerRef = useRef();

  const [newDivPos, setNewDivPos] = useState({ x: 0, y: 0 });
  const [newDivLen, setNewDivLen] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  // name shape input
  const [isInputHidden, setIsInputHidden] = useState(true);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    console.log(newDivPos);
  }, [newDivPos]);

  useEffect(() => {
    // reset mouse detection if mode changes
    if (mode !== Modes.Create) setIsMouseDown(false);
  }, [mode]);

  const handleMouseDown = (e) => {
    if (mode === Modes.Create) {
      setNewDivStart(e);
      setNewDivLen({ x: 0, y: 0 });
      setIsMouseDown(true);
    } else if (mode === Modes.Name && isInputHidden) {
      setNewDivStart(e);
      setNewDivLen({ x: 0, y: 0 });
    }
  };

  const handleMouseUp = (e) => {
    setIsMouseDown(false);
    if (mode === Modes.Create) addDefaultShape();
    if (mode === Modes.Name) handleInputName();
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    setNewDivEnd(e);
  };

  const setNewDivStart = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / viewer.scale;
    const y = (e.clientY - rect.top) / viewer.scale;
    setNewDivPos({ x: x, y: y });
  };

  const setNewDivEnd = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / viewer.scale - newDivPos.x;
    const y = (e.clientY - rect.top) / viewer.scale - newDivPos.y;
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
      shapeType: ShapeTypes.Default,
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

  const handleInputName = () => {
    setIsInputHidden(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      shapesDispatch({
        type: "added",
        shapeType: ShapeTypes.Name,
        text: inputText,
        position: {
          x: newDivPos.x,
          y: newDivPos.y,
        },
      });
      setIsInputHidden(true);
      resetNewDiv();
    }
  };

  return (
    <div
      ref={containerRef}
      className={classNames("shapeCreation", {
        create: mode === Modes.Create,
        name: mode === Modes.Name,
      })}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* shape creation: name shape input */}
      <div
        className={classNames("input", {
          "vis-hidden": isInputHidden,
        })}
        style={{
          top: `${newDivPos.y}px`,
          left: `${newDivPos.x}px`,
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => handleInputKeyDown(e)}
        />
      </div>
      {/* shape creation: new shape div */}
      <div
        className={classNames("newDiv", {
          "vis-hidden": !isMouseDown,
        })}
        style={{
          top: `${newDivPos.y}px`,
          left: `${newDivPos.x}px`,
          height: `${newDivLen.y}px`,
          width: `${newDivLen.x}px`,
        }}
      ></div>
      {/* ----------------------------------------- */}
      {/* shapes list */}
      {shapesList.map((shape) => {
        if (shape.type === ShapeTypes.Default)
          return (
            <div
              key={shape.id}
              className="defaultShape"
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
        else if (shape.type === ShapeTypes.Name)
          return (
            <div
              key={shape.id}
              className="nameShape"
              style={{
                top: `${shape.y}px`,
                left: `${shape.x}px`,
              }}
            >
              {shape.text}
            </div>
          );
      })}
      {children}
    </div>
  );
};

export default ShapeCreation;
