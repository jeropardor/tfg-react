import { createContext, useContext, useState } from "react";

export const Modes = {
  Defaut: "default",
  Create: "create",
  Name: "name",
};

const ModeContext = createContext();
export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(Modes.Defaut);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
