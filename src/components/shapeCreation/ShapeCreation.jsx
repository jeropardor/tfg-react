import { useState } from "react";

import "./shape.scss";

const ShapeCreation = ({ children }) => {
  const [shapes, setShapes] = useState([]);

  return <div className="shapeCreation">{children}</div>;
};

export default ShapeCreation;
