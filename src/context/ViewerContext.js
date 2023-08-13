import { createContext, useContext, useState } from "react";

const ViewerContext = createContext();
export const useViewer = () => useContext(ViewerContext);

export const ViewerProvider = ({ children }) => {
  const [viewer, setViewer] = useState({
    x: 0,
    y: 0,
    scale: 1,
  });
  return (
    <ViewerContext.Provider value={{ viewer, setViewer }}>
      {children}
    </ViewerContext.Provider>
  );
};
