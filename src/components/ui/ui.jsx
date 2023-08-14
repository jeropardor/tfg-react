import { useState } from "react";

import { ShapesProvider } from "../../context/ShapesContext";
import { ViewerProvider } from "../../context/ViewerContext";
import SidePanel from "../sidePanel/SidePanel";
import View from "../view/View";
import MenuIcon from "../shared/icons/MenuIcon";

import "./ui.scss";

const UI = () => {
  const [sidePanel, setSidePanel] = useState(false);

  return (
    <ViewerProvider>
      <ShapesProvider>
        <div className="ui-window">
          <SidePanel isVisible={sidePanel} />
          <View />
          <MenuIcon isOpen={sidePanel} setIsOpen={setSidePanel} />
        </div>
      </ShapesProvider>
    </ViewerProvider>
  );
};

export default UI;
