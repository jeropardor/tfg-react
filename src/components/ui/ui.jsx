import { useState } from "react";

import { ShapesProvider } from "../../context/ShapesContext";
import SidePanel from "../sidePanel/SidePanel";
import View from "../view/View";
import MenuIcon from "../shared/icons/MenuIcon";
import ShapeList from "../shared/ShapeListCompoent/ShapeList";

import "./ui.scss";

const UI = () => {
  const [sidePanel, setSidePanel] = useState(false);

  return (
    <ShapesProvider>
      <div className="ui-window">
        <SidePanel isVisible={sidePanel} />
        <View />
        <MenuIcon isOpen={sidePanel} setIsOpen={setSidePanel} />
        <ShapeList />
      </div>
    </ShapesProvider>
  );
};

export default UI;
