import { useRef, useState } from "react";
import classNames from "classnames";

import { useViewer } from "../../../context/ViewerContext";
import DragWrapper from "./DragWrapper";
import ZoomWrapper from "./ZoomWrapper";
import ZoomButtons from "./ZoomButtons";

import "./zoom.scss";

const SCALE_FACTOR = 0.8;

const DragZoomWrapper = ({ children }) => {
  const { viewer, setViewer } = useViewer();

  const zoomRef = useRef();
  const viewRef = useRef();

  const [isMoving, setIsMoving] = useState(false);

  const handleDragMove = (e) => {
    if (!isMoving) return;

    setViewer((params) => ({
      ...params,
      x: params.x + e.movementX,
      y: params.y + e.movementY,
    }));
  };

  const resetPosition = () => {
    setViewer({
      x: 0,
      y: 0,
      scale: zoomRef.current.clientHeight / viewRef.current.clientHeight,
    });
  };

  const handleScale = (delta) => {
    setViewer((params) => ({
      ...params,
      scale: params.scale * (delta * SCALE_FACTOR),
    }));
  };
  const handleScaleUp = () => handleScale(2);
  const handleScaleDown = () => handleScale(0.5);

  return (
    <div className="dragZoomWrapper-window">
      <DragWrapper
        onDragMove={handleDragMove}
        className={classNames({ isMoving: isMoving })}
      >
        <ZoomWrapper handleScale={handleScale} innerRef={zoomRef}>
          <div
            ref={viewRef}
            className="dragZoomWrapper"
            style={{
              transform: `translateY(-50%) 
              translateX(${viewer.x}px) 
              translateY(${viewer.y}px) 
              scale(${viewer.scale})`,
              /* width: `${ 100 * scale }%`,
              height: "auto", */
            }}
          >
            {children}
          </div>
        </ZoomWrapper>
      </DragWrapper>
      <ZoomButtons
        isMoving={isMoving}
        setIsMoving={setIsMoving}
        resetPosition={resetPosition}
        handleScaleUp={handleScaleUp}
        handleScaleDown={handleScaleDown}
      />
    </div>
  );
};

export default DragZoomWrapper;
