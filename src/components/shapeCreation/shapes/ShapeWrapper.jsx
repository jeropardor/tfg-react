import { useState } from "react";
import classNames from "classnames";
import { FiXCircle, FiEye, FiEyeOff, FiEdit } from "react-icons/fi";
import { BiColor } from "react-icons/bi";

import { Can } from "../../../context/rbac/Can";
import { ShapeColors, useShapesDispatch } from "../../../context/ShapesContext";
import { useCategories } from "../../../context/CategoryContext";
import IconClickWrapper from "../../shared/icons/IconClickWrapper";

import "./shapes.scss";

const ShapeWrapper = ({ shape, children }) => {
  const shapesDispatch = useShapesDispatch();
  const categories = useCategories();

  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleSelected = () => {
    shapesDispatch({
      type: "selected",
      id: shape.id,
    });
  };

  const handleCategory = (e) => {
    shapesDispatch({
      type: "changed",
      shape: { ...shape, category: e.target.value },
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
        <Can I="update" a="shape">
          <select value={shape.category} onChange={handleCategory}>
            <option value={null}>Some option</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </Can>
      </div>
      {children}
    </div>
  );
};

export default ShapeWrapper;
