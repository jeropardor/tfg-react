import { useState } from "react";
import { FiUser } from "react-icons/fi";

import { ShapesProvider } from "../../context/ShapesContext";
import { ViewerProvider } from "../../context/ViewerContext";
import SidePanel from "../sidePanel/SidePanel";
import View from "../view/View";
import MenuIcon from "../shared/icons/MenuIcon";

import "./ui.scss";
import IconClickWrapper from "../shared/icons/IconClickWrapper";

const UI = () => {
  const [sidePanel, setSidePanel] = useState(false);

  return (
    <ViewerProvider>
      <ShapesProvider>
        <div className="ui-window">
          <SidePanel isVisible={sidePanel} />
          <View />
          <MenuIcon isOpen={sidePanel} setIsOpen={setSidePanel} />
          <div className="user-selection">
            <IconClickWrapper icon={<FiUser />} />
          </div>
        </div>
      </ShapesProvider>
    </ViewerProvider>
  );
};

export default UI;
