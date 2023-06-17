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
    case "added": {
      return [
        ...shapes,
        {
          id: window.crypto.randomUUID(),
          type: action.type,
          text: action.text,
          selected: false,
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
    case "deleted": {
      return shapes.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const ShapeTypes = {
  Defaut: "default",
};

const initialShapes = [
  {
    id: 0,
    type: ShapeTypes.Defaut,
    text: "lorem ipsum",
    selected: false,
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  },
];
