import { useState } from "react";

import { ShapesProvider } from "../../context/ShapesContext";
import SidePanel from "../sidePanel/SidePanel";
import View from "../view/View";
import MenuIcon from "../shared/icons/MenuIcon";
import ShapeList from "../shared/ShapeListCompoent/ShapeList";

import "./ui.scss";
import { ViewerProvider } from "../../context/ViewerContext";

const UI = () => {
  const [sidePanel, setSidePanel] = useState(false);

  return (
    <ViewerProvider>
      <ShapesProvider>
        <div className="ui-window">
          <SidePanel isVisible={sidePanel} />
          <View />
          <MenuIcon isOpen={sidePanel} setIsOpen={setSidePanel} />
          <ShapeList />
        </div>
      </ShapesProvider>
    </ViewerProvider>
  );
};

export default UI;
