import classNames from "classnames";
import {
  FiMousePointer,
  FiMove,
  FiPlusSquare,
  FiAlertCircle,
} from "react-icons/fi";

import { Can } from "../../context/rbac/Can";
import { Modes, useMode } from "../../context/ModeContext";
import OptionButton from "./OptionButton";

import "./sidePanel.scss";

const SidePanel = ({ isVisible }) => {
  const { mode, setMode } = useMode();

  return (
    <div
      className={classNames("sidePanel", {
        "dis-hidden": !isVisible,
      })}
    >
      <OptionButton
        icon={<FiMove />}
        text={"options." + Modes.Defaut}
        onClick={() => setMode(Modes.Defaut)}
        className={classNames({ selected: Modes.Defaut === mode })}
      />
      <Can I="create" a="shape">
        <OptionButton
          icon={<FiPlusSquare />}
          text={"options." + Modes.Create}
          onClick={() => setMode(Modes.Create)}
          className={classNames({ selected: Modes.Create === mode })}
        />
        <OptionButton
          icon={<FiAlertCircle />}
          text={"options." + Modes.Name}
          onClick={() => setMode(Modes.Name)}
          className={classNames({ selected: Modes.Name === mode })}
        />
      </Can>
    </div>
  );
};

export default SidePanel;
