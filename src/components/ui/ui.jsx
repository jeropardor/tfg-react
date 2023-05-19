import { useState } from "react";

import SidePanel from "../sidePanel/SidePanel";
import View from "../view/View";
import MenuIcon from "../shared/icons/MenuIcon";

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
