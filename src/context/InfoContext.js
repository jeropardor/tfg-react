import { createContext, useContext, useReducer } from "react";

const InfoContext = createContext(null); // info context
const InfoDispatchContext = createContext(null); // info changer context

export function InfoProvider({ children }) {
  const [info, dispatch] = useReducer(infoReducer, initialInfo);

  return (
    <InfoContext.Provider value={info}>
      <InfoDispatchContext.Provider value={dispatch}>
        {children}
      </InfoDispatchContext.Provider>
    </InfoContext.Provider>
  );
}

export function useInfo() {
  return useContext(InfoContext);
}

export function useInfoDispatch() {
  return useContext(InfoDispatchContext);
}

function infoReducer(info, action) {
  switch (action.type) {
    case "added": {
      return [
        ...info,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return info.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return info.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialInfo = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
