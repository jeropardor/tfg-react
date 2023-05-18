import { useState } from "react";

import SidePanel from "../sidePanel/sidePanel";
import View from "../view/view";
import MenuIcon from "../shared/icons/menuIcon";

import "./ui.scss";

const UI = () => {
  const [sidePanel, setSidePanel] = useState(false);

  return (
    <div className="ui-window">
      <SidePanel isVisible={sidePanel} />
      <View />
      <MenuIcon isOpen={sidePanel} setIsOpen={setSidePanel} />
    </div>
  );
};

export default UI;
