import { useContext } from "react";
import classNames from "classnames";

import { AbilityContext } from "../../context/rbac/Can";
import { useShapes, useShapesDispatch } from "../../context/ShapesContext";
import { useCategories } from "../../context/CategoryContext";
import ShapeListElement from "./ShapeListElement";
import ShapeListGroup from "./ShapeListGroup";

import "./shapeList.scss";

const ShapeList = ({ handleCentering, isVisible }) => {
  const ability = useContext(AbilityContext);
  const shapes = useShapes();
  const shapesDispatch = useShapesDispatch();
  const categories = useCategories();

  const getRest = (shapes, categories) => {
    const keys = categories.map((c) => c.id);
    return shapes.filter((s) => !keys.includes(s.category));
  };

  return (
    <div
      className={classNames("shapeList", {
        "dis-hidden": !isVisible,
      })}
    >
      {categories.map((category) => (
        <ShapeListGroup
          key={category.id}
          category={category}
          shapes={shapes.filter((s) => s.category == category.id)}
          shapesDispatch={shapesDispatch}
          handleCentering={handleCentering}
        />
      ))}
      {categories.length !== 0 ? <div className="bar"></div> : null}
      <div className="listUngrouped">
        {getRest(shapes, categories).map(
          (shape) =>
            (ability.can("read", "private") || shape.public) && (
              <ShapeListElement
                key={shape.id}
                handleCentering={handleCentering}
                shape={shape}
                shapesDispatch={shapesDispatch}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ShapeList;
