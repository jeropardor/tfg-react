import { useState } from "react";
import classNames from "classnames";
import { FiXCircle, FiEye, FiEyeOff, FiEdit } from "react-icons/fi";
import { BiColor } from "react-icons/bi";

import { Can } from "../../context/rbac/Can";
import {
  ShapeColors,
  ShapeTypes,
  useShapesDispatch,
} from "../../context/ShapesContext";
import IconClickWrapper from "../shared/icons/IconClickWrapper";

import "./shapes/shapes.scss";

const ShapeWrapper = ({ shape, children }) => {
  const shapesDispatch = useShapesDispatch();

  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleSelected = () => {
    shapesDispatch({
      type: "selected",
      id: shape.id,
    });
  };

  return (
    <div
      className={classNames(`shape color-${ShapeColors[shape.color]}`, {
        "dis-hidden": !shape.visible,
        selected: shape.selected,
        editable: shape.editable,
      })}
      style={{
        top: `${shape.y}px`,
        left: `${shape.x}px`,
      }}
      onClick={handleSelected}
    >
      <div
        className={classNames("icons", {
          "dis-hidden": !shape.selected,
        })}
      >
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
        <Can I="update" a="shape">
          <IconClickWrapper
            icon={<FiEdit />}
            onClick={() =>
              shapesDispatch({
                type: "changed",
                shape: { ...shape, editable: !shape.editable },
              })
            }
          />
          <IconClickWrapper
            icon={<BiColor />}
            onClick={() =>
              shapesDispatch({
                type: "colored",
                shape: shape,
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
      {children}
    </div>
  );
};

export default ShapeWrapper;
