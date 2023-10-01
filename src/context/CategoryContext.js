import { createContext, useContext, useReducer } from "react";

const CategoryContext = createContext(null);
const CategoryDispatchContext = createContext(null);

export function CategoryProvider({ children }) {
  const [categories, dispatch] = useReducer(categoryReducer, initialCategories);

  return (
    <CategoryContext.Provider value={categories}>
      <CategoryDispatchContext.Provider value={dispatch}>
        {children}
      </CategoryDispatchContext.Provider>
    </CategoryContext.Provider>
  );
}

export function useCategories() {
  return useContext(CategoryContext);
}

export function useCategoriesDispatch() {
  return useContext(CategoryDispatchContext);
}

function categoryReducer(categories, action) {
  switch (action.type) {
    case "imported": {
      return [...action.categories];
    }
    case "added": {
      return [
        ...categories,
        {
          id: window.crypto.randomUUID(),
          name: action.name,
          color: action.color,
          visible: true,
        },
      ];
    }
    case "changed": {
      return categories.map((t) => {
        if (t.id === action.category.id) {
          return action.category;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return categories.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialCategories = [
  {
    id: 0,
    name: "cat1",
    color: "#4c8ffc",
    visible: true,
  },
  {
    id: 1,
    name: "lorem",
    color: "#4c8ccc",
    visible: true,
  },
];
