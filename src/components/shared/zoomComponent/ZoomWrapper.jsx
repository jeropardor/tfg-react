import { useEffect, useMemo, useRef, useState } from "react";

import ZoomButtons from "./zoomButtons";

import "./zoom.scss";

const SCROLL_SENSITIVITY = 0.0005;
const MAX_ZOOM = 5;
const MIN_ZOOM = 0.1;
const image = "sdf";

const ZoomWrapper = ({ children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [draggind, setDragging] = useState(false);

  const touch = useRef({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const observer = useRef(null);
  const background = useMemo(() => new Image(), [image]);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const handleWheel = (event) => {};

  const handleMouseMove = (event) => {};

  const handleMouseDown = (event) => {};

  const handleMouseUp = () => setDragging(false);

  const draw = () => {};

  return (
    <div ref={containerRef} className="zoomWrapper">
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        onMouseMove={handleMouseMove}
        ref={canvasRef}
      >
        {children}
      </div>
      <ZoomButtons />
    </div>
  );
};

export default ZoomWrapper;
