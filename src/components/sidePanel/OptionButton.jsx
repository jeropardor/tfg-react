import { useIntl } from "react-intl";

import IconClickWrapper from "../shared/icons/IconClickWrapper";

import "./sidePanel.scss";

const OptionButton = ({ icon, text, onClick, className }) => {
  const intl = useIntl();

  return (
    <div className={className + " optionButton"} onClick={onClick}>
      <IconClickWrapper icon={icon} />
      {intl.formatMessage({ id: text })}
    </div>
  );
};

export default OptionButton;
