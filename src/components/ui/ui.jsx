import SidePanel from "../sidePanel/sidePane";
import View from "../view/view";

import "./ui.css";

const UI = () => {
  return (
    <div className="ui-window">
      <SidePanel />
      <View />
    </div>
  );
};

export default UI;
