import classNames from "classnames";

import OptionButton from "./optionButton";

import "./sidePanel.scss";

const SidePanel = ({ isVisible }) => {
  return (
    <div
      className={classNames("sidePanel", {
        "dis-hidden": !isVisible,
      })}
    >
      <OptionButton text={"hola"} />
      <OptionButton text={"adios"} />
    </div>
  );
};

export default SidePanel;