import { createContext, useContext, useState } from "react";

export const Users = {
  Viewer: "viewer",
  Editor: "editor",
};

const UsersContext = createContext();
export const useUsers = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(Users.Viewer);
  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
};
