import "./zoom.scss";

const ZoomWrapper = ({ handleScale, children, style, className, innerRef }) => {
  const onWheel = (e) => {
    handleScale(e.deltaY < 0 ? 1.5 : 0.75);
  };

  return (
    <div
      onWheel={onWheel}
      className={className + " zoomWrapper"}
      ref={innerRef}
    >
      {children}
    </div>
  );
};

export default ZoomWrapper;
