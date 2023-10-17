import { useState } from "react";
import classNames from "classnames";
import { FiChevronDown, FiChevronUp, FiEye, FiEyeOff } from "react-icons/fi";

import { useCategoriesDispatch } from "../../context/CategoryContext";
import IconClickWrapper from "../shared/icons/IconClickWrapper";
import ShapeListElement from "./ShapeListElement";

import "./shapeList.scss";

const ShapeListGroup = ({
  category,
  shapes,
  shapesDispatch,
  handleCentering,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const categoriesDispatch = useCategoriesDispatch();

  const handleVisible = () => {
    categoriesDispatch({
      type: "changed",
      category: { ...category, visible: !category.visible },
    });
    shapes.forEach((shape) => {
      shapesDispatch({
        type: "changed",
        shape: { ...shape, visible: !category.visible },
      });
    });
  };

  return (
    <div
      className={classNames("shapeListCategory", {
        expanded: isCollapsed,
      })}
    >
      <div className="header">
        <div className="name">{category.name}</div>
        <IconClickWrapper
          icon={category.visible ? <FiEye /> : <FiEyeOff />}
          onClick={handleVisible}
        />
        <IconClickWrapper
          icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
          onClick={() => setIsCollapsed((b) => !b)}
        />
      </div>
      <div className="items">
        {shapes.map((shape) => (
          <ShapeListElement
            key={shape.id}
            handleCentering={handleCentering}
            shape={shape}
          />
        ))}
      </div>
    </div>
  );
};

export default ShapeListGroup;
