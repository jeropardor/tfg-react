import { createContext, useContext, useReducer } from "react";

const ShapesContext = createContext(null); // shapes context
const ShapesDispatchContext = createContext(null); // shapes changer context

export function ShapesProvider({ children }) {
  const [shapes, dispatch] = useReducer(shapesReducer, initialShapes);

  return (
    <ShapesContext.Provider value={shapes}>
      <ShapesDispatchContext.Provider value={dispatch}>
        {children}
      </ShapesDispatchContext.Provider>
    </ShapesContext.Provider>
  );
}

export function useShapes() {
  return useContext(ShapesContext);
}

export function useShapesDispatch() {
  return useContext(ShapesDispatchContext);
}

function shapesReducer(shapes, action) {
  switch (action.type) {
    case "imported": {
      return [...action.shapes];
    }
    case "added": {
      return [
        ...shapes,
        {
          id: window.crypto.randomUUID(),
          type: action.shapeType,
          text: action.text,
          category: null,
          selected: false,
          editable: false,
          visible: true,
          color: 0,
          ...action.position,
        },
      ];
    }
    case "changed": {
      return shapes.map((t) => {
        if (t.id === action.shape.id) {
          return action.shape;
        } else {
          return t;
        }
      });
    }
    case "colored": {
      return shapes.map((t) =>
        t.id === action.shape.id
          ? { ...t, color: action.shape.color++ % ShapeColors.length }
          : t
      );
    }
    case "selected": {
      return shapes.map((t) => ({ ...t, selected: t.id === action.id }));
    }
    case "deleted": {
      return shapes.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const ShapeTypes = {
  Default: "default",
  Name: "name",
};
export const ShapeColors = ["default", "red", "green", "blue"];

const initialShapes = [
  /* {
    id: 0,
    type: ShapeTypes.Default,
    text: "lorem ipsum",
    category: null, // id
    selected: false,
    visible: true,
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: 0,
  }, */
];
