import React, { useState } from "react";

const DragWrapper = (props) => {
  const {
    onPointerDown,
    onPointerUp,
    onPointerMove,
    onDragMove,
    children,
    style,
    className,
  } = props;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    onPointerDown(e);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    onPointerUp(e);
  };

  const handlePointerMove = (e) => {
    if (isDragging) onDragMove(e);
    onPointerMove(e);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchEnd={handlePointerUp}
      onTouchCancel={handlePointerUp}
      onPointerMove={handlePointerMove}
      style={style}
      className={className + " draggableWrapper"}
    >
      {children}
    </div>
  );
};

DragWrapper.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};

export default DragWrapper;
