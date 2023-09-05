import { createContext, useContext, useState } from "react";
import ability from "./defineAbility";

export const Users = {
  Viewer: "viewer",
  Editor: "editor",
};

const UsersContext = createContext();
export const useUsers = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(Users.Viewer);

  const changeUser = (user) => {
    switch (user) {
      case Users.Viewer:
        ability.update([{ action: "read", subject: "all" }]);
        return setUser(Users.Viewer);
      case Users.Editor:
        ability.update([
          { action: "read", subject: "all" },
          { action: "create", subject: "shape" },
          { action: "read", subject: "shape" },
          { action: "write", subject: "shape" },
          { action: "update", subject: "shape" },
          { action: "delete", subject: "shape" },
        ]);
        return setUser(Users.Editor);
    }
  };
  return (
    <UsersContext.Provider value={{ user, changeUser }}>
      {children}
    </UsersContext.Provider>
  );
};
