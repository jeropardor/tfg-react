import classNames from "classnames";
import { FiXCircle, FiEye, FiEyeOff, FiExternalLink } from "react-icons/fi";

import { Can } from "../../context/rbac/Can";
import { ShapeTypes } from "../../context/ShapesContext";
import IconClickWrapper from "../shared/icons/IconClickWrapper";

import "./shapeList.scss";
import { useEffect } from "react";

const ShapeListElement = ({ handleCentering, shape, shapesDispatch }) => {
  const handleClick = () => {
    if (shape.type === ShapeTypes.Default)
      handleCentering(shape.x + shape.width / 2, shape.y + shape.height / 2);
    else handleCentering(shape.x, shape.y);

    shapesDispatch({
      type: "selected",
      id: shape.id,
    });
  };

  useEffect(() => {
    console.log(shape.text, shape.public ? "public" : "private");
  }, [shape.selected]);

  return (
    <div
      className={classNames("shapeListElement", {
        selected: shape.selected,
      })}
    >
      <div className="text" onClick={handleClick}>
        {shape.text} {shape.category}
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
        <Can I="update" a="shape">
          <IconClickWrapper
            className={classNames({
              private: !shape.public,
              public: shape.public,
            })}
            icon={<FiExternalLink />}
            onClick={() =>
              shapesDispatch({
                type: "changed",
                shape: { ...shape, public: !shape.public },
              })
            }
          />
        </Can>
      </div>
    </div>
  );
};

export default ShapeListElement;
