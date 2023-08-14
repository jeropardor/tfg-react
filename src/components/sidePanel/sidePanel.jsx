import classNames from "classnames";
import { FiMousePointer, FiPlusSquare, FiAlertCircle } from "react-icons/fi";

import { Modes, useMode } from "../../context/ModeContext";
import OptionButton from "./OptionButton";

import "./sidePanel.scss";

const SidePanel = ({ isVisible }) => {
  const { mode, setMode } = useMode();

  const modes = [
    { id: Modes.Defaut, icon: <FiMousePointer /> },
    { id: Modes.Create, icon: <FiPlusSquare /> },
    { id: Modes.Name, icon: <FiAlertCircle /> },
  ];

  return (
    <div
      className={classNames("sidePanel", {
        "dis-hidden": !isVisible,
      })}
    >
      {modes.map((option) => (
        <OptionButton
          key={option.id}
          icon={option.icon}
          text={"options." + option.id}
          onClick={() => setMode(option.id)}
          className={classNames({ selected: option.id === mode })}
        />
      ))}
    </div>
  );
};

export default SidePanel;
