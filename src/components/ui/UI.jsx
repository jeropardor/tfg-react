import { useState } from "react";
import { FiUser, FiUserCheck } from "react-icons/fi";

import {
  Users,
  UsersProvider,
  useUsers,
} from "../../context/rbac/UsersContext";
import { ShapesProvider } from "../../context/ShapesContext";
import { CategoryProvider } from "../../context/CategoryContext";
import { ViewerProvider } from "../../context/ViewerContext";
import SidePanel from "../sidePanel/SidePanel";
import View from "../view/View";
import MenuIcon from "../shared/icons/MenuIcon";
import IconClickWrapper from "../shared/icons/IconClickWrapper";
import CategoryModal from "../shared/modals/CategoryModal";

import "./ui.scss";

const UI = () => {
  const [sidePanel, setSidePanel] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const { user, changeUser } = useUsers();

  return (
    <ViewerProvider>
      <CategoryProvider>
        <ShapesProvider>
          <div className="ui-window">
            <SidePanel
              isVisible={sidePanel}
              setCategoryModal={setCategoryModal}
            />
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
            <CategoryModal
              isVisible={categoryModal}
              setIsVisible={setCategoryModal}
            />
          </div>
        </ShapesProvider>
      </CategoryProvider>
    </ViewerProvider>
  );
};

export default UI;
