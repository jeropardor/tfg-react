import "./icons.scss";

const IconClickWrapper = ({ icon, onClick }) => {
  return (
    <div onClick={onClick} className="icon">
      {icon}
    </div>
  );
};

export default IconClickWrapper;
