import { useState } from "react";
import { FiUser, FiUserCheck } from "react-icons/fi";

import {
  Users,
  UsersProvider,
  useUsers,
} from "../../context/rbac/UsersContext";
import { ShapesProvider } from "../../context/ShapesContext";
import { ViewerProvider } from "../../context/ViewerContext";
import SidePanel from "../sidePanel/SidePanel";
import View from "../view/View";
import MenuIcon from "../shared/icons/MenuIcon";
import IconClickWrapper from "../shared/icons/IconClickWrapper";

import "./ui.scss";

const UI = () => {
  const [sidePanel, setSidePanel] = useState(false);
  const { user, changeUser } = useUsers();

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
                user === Users.Viewer
                  ? changeUser(Users.Editor)
                  : changeUser(Users.Viewer)
              }
            />
          </div>
        </div>
      </ShapesProvider>
    </ViewerProvider>
  );
};

export default UI;
