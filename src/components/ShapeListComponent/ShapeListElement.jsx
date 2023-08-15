import classNames from "classnames";
import { FiXCircle, FiEye, FiEyeOff } from "react-icons/fi";

import { ShapeTypes, useShapesDispatch } from "../../context/ShapesContext";
import IconClickWrapper from "../shared/icons/IconClickWrapper";

import "./shapeList.scss";

const ShapeListElement = ({ handleCentering, shape }) => {
  const shapesDispatch = useShapesDispatch();

  return (
    <div className={classNames("shapeListElement")}>
      <div
        className="text"
        onClick={() =>
          shape.type === ShapeTypes.Default
            ? handleCentering(
                shape.x + shape.width / 2,
                shape.y + shape.height / 2
              )
            : handleCentering(shape.x, shape.y)
        }
      >
        {shape.text}
      </div>
      <div className="buttons">
        <IconClickWrapper
          icon={<FiXCircle />}
          onClick={() =>
            shapesDispatch({
              type: "deleted",
              id: shape.id,
            })
          }
        />
        <IconClickWrapper
          icon={shape.visible ? <FiEye /> : <FiEyeOff />}
          onClick={() =>
            shapesDispatch({
              type: "changed",
              shape: { ...shape, visible: !shape.visible },
            })
          }
        />
      </div>
    </div>
  );
};

export default ShapeListElement;
