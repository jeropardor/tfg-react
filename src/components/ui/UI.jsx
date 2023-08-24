import { useState } from "react";
import { FiUser, FiUserCheck } from "react-icons/fi";

import { ShapesProvider } from "../../context/ShapesContext";
import { ViewerProvider } from "../../context/ViewerContext";
import SidePanel from "../sidePanel/SidePanel";
import View from "../view/View";
import MenuIcon from "../shared/icons/MenuIcon";

import "./ui.scss";
import IconClickWrapper from "../shared/icons/IconClickWrapper";
import { Users, UsersProvider, useUsers } from "../../context/UsersContext";

const UI = () => {
  const [sidePanel, setSidePanel] = useState(false);
  const { user, setUser } = useUsers();

  return (
    <ViewerProvider>
      <ShapesProvider>
        <div className="ui-window">
          <SidePanel isVisible={sidePanel} />
          <View />
          <MenuIcon isOpen={sidePanel} setIsOpen={setSidePanel} />
          <div className="user-selection">
            <IconClickWrapper
              icon={user === Users.Viewer ? <FiUser /> : <FiUserCheck />}
              onClick={() =>
                setUser((u) =>
                  u === Users.Viewer ? Users.Editor : Users.Viewer
                )
              }
            />
          </div>
        </div>
      </ShapesProvider>
    </ViewerProvider>
  );
};

export default UI;
