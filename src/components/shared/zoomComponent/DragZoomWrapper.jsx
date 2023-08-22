import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiLayers } from "react-icons/fi";
import classNames from "classnames";

import { useViewer } from "../../../context/ViewerContext";
import DragWrapper from "./DragWrapper";
import ZoomWrapper from "./ZoomWrapper";
import ZoomButtons from "./ZoomButtons";
import ShapeList from "../../ShapeListComponent/ShapeList";

import "./zoom.scss";
import IconClickWrapper from "../icons/IconClickWrapper";

const SCALE_FACTOR = 0.8;

const DragZoomWrapper = ({ children }) => {
  const { viewer, setViewer } = useViewer();

  const zoomRef = useRef();
  const viewRef = useRef();

  const [isMoving, setIsMoving] = useState(false);

  const [isVisibleShapeList, setIsVisibleShapeList] = useState(false);

  const handleDragMove = (e) => {
    if (!isMoving) return;

    setViewer((params) => ({
      ...params,
      x: params.x + e.movementX,
      y: params.y + e.movementY,
    }));
  };

  const handleCentering = (x, y) => {
    setViewer((params) => ({
      x: viewRef.current.clientWidth / 2 - x,
      y: viewRef.current.clientHeight / 2 - y,
      scale: 1,
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

  /* useEffect(() => {
    console.log(viewer);
  }, [viewer]); */

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
      <div className="sideOptions">
        <div className="column-wrapper">
          <IconClickWrapper
            className="hideButton"
            icon={<FiLayers />}
            onClick={() => setIsVisibleShapeList((b) => !b)}
          />
          <ZoomButtons
            isMoving={isMoving}
            setIsMoving={setIsMoving}
            resetPosition={resetPosition}
            handleScaleUp={handleScaleUp}
            handleScaleDown={handleScaleDown}
          />
        </div>
        <ShapeList
          isVisible={isVisibleShapeList}
          handleCentering={handleCentering}
        />
      </div>
    </div>
  );
};

export default DragZoomWrapper;
