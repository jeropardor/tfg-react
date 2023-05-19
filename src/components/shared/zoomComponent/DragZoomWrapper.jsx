import { useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

import DragWrapper from "./DragWrapper";
import ZoomWrapper from "./ZoomWrapper";
import ZoomButtons from "./ZoomButtons";

import "./zoom.scss";

const SCALE_FACTOR = 0.8;

const DragZoomWrapper = ({ children }) => {
  const zoomRef = useRef();
  const viewRef = useRef();

  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [isMoving, setIsMoving] = useState(false);
  const [scale, setScale] = useState(1);

  const handleDragMove = (e) => {
    if (!isMoving) return;

    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  const resetPosition = () => {
    setTranslate({ x: 0, y: 0 });
    setScale(zoomRef.current.clientHeight / viewRef.current.clientHeight);
  };

  const handleScale = (delta) => {
    setScale((scale) => scale * (delta * SCALE_FACTOR));
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
              translateX(${translate.x}px) 
              translateY(${translate.y}px) 
              scale(${scale})`,
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
