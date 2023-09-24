import classNames from "classnames";

import { useShapes } from "../../context/ShapesContext";
import { useCategories } from "../../context/CategoryContext";
import ShapeListElement from "./ShapeListElement";
import ShapeListGroup from "./ShapeListGroup";

import "./shapeList.scss";

const ShapeList = ({ handleCentering, isVisible }) => {
  const shapes = useShapes();
  const categories = useCategories();

  const getRest = (shapes, categories) => {
    const keys = categories.map((c) => c.id);
    return shapes.filter((s) => !keys.includes(parseInt(s.category)));
  };

  return (
    <div
      className={classNames("shapeList", {
        "dis-hidden": !isVisible,
      })}
    >
      {categories.map((category) => (
        <ShapeListGroup
          category={category}
          shapes={shapes.filter((s) => s.category == category.id)}
          handleCentering={handleCentering}
        />
      ))}
      {categories.length !== 0 ? <div className="bar"></div> : null}
      <div className="listUngrouped">
        {getRest(shapes, categories).map((shape) => (
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

export default ShapeList;
