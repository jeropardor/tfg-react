import "./icons.scss";

const IconClickWrapper = ({ icon, onClick, className }) => {
  return (
    <div onClick={onClick} className={className + " icon"}>
      {icon}
    </div>
  );
};

export default IconClickWrapper;
