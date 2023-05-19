import { useRef, useState } from "react";

import DragWrapper from "../shared/zoomComponent/DragWrapper";
import ZoomWrapper from "../shared/zoomComponent/ZoomWrapper";
import ZoomButtons from "../shared/zoomComponent/ZoomButtons";

import "./view.scss";
import classNames from "classnames";

const SCALE_FACTOR = 0.8;

const View = () => {
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
    <div className="view-window">
      <DragWrapper
        onDragMove={handleDragMove}
        className={classNames({ isMoving: isMoving })}
      >
        <ZoomWrapper handleScale={handleScale} innerRef={zoomRef}>
          <div
            ref={viewRef}
            className="view"
            style={{
              transform: `translateY(-50%) 
              translateX(${translate.x}px) 
              translateY(${translate.y}px) 
              scale(${scale})`,
            }}
          ></div>
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

export default View;
