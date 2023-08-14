import classNames from "classnames";

import "./shapeList.scss";

const ShapeListElement = ({ handleCentering, shape }) => {
  return (
    <div
      className={classNames("shapeListElement")}
      onClick={() =>
        handleCentering(shape.x + shape.width / 2, shape.y + shape.height / 2)
      }
    >
      {shape.text}
    </div>
  );
};

export default ShapeListElement;
