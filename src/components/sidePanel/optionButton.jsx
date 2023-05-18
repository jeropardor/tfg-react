import "./sidePanel.scss";

const OptionButton = ({ text, onClick }) => {
  return (
    <div className="optionButton" onClick={onClick}>
      {text}
    </div>
  );
};

export default OptionButton;
