import classNames from "classnames";
import { FiXCircle, FiEye, FiEyeOff } from "react-icons/fi";

import { Can } from "../../context/rbac/Can";
import { ShapeTypes, useShapesDispatch } from "../../context/ShapesContext";
import IconClickWrapper from "../shared/icons/IconClickWrapper";

import "./shapeList.scss";

const ShapeListElement = ({ handleCentering, shape }) => {
  const shapesDispatch = useShapesDispatch();

  const handleClick = () => {
    if (shape.type === ShapeTypes.Default)
      handleCentering(shape.x + shape.width / 2, shape.y + shape.height / 2);
    else handleCentering(shape.x, shape.y);

    shapesDispatch({
      type: "selected",
      id: shape.id,
    });
  };

  return (
    <div className={classNames("shapeListElement")}>
      <div className="text" onClick={handleClick}>
        {shape.text}
      </div>
      <div className="buttons">
        <Can I="delete" a="shape">
          <IconClickWrapper
            icon={<FiXCircle />}
            onClick={() =>
              shapesDispatch({
                type: "deleted",
                id: shape.id,
              })
            }
          />
        </Can>
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
