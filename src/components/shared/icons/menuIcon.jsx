import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import "./icons.scss";

const MenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen((isOpen) => !isOpen)} className="icon">
      {!isOpen ? <FiMenu /> : <FiX />}
    </div>
  );
};

export default MenuIcon;
