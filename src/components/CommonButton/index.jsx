import "./index.css";

const CommonButton = ({
  icon,
  label,
  bgColor,
  fontColor,
  fontSize,
  shadow = false,
  width = 120,
  height = 40,
}) => {
  const style = {
    background: bgColor,
    color: fontColor,
    fontSize: fontSize,
    width: width,
    height: height,
  };

  return (
    <button className={shadow && "shadow-button"} style={style}>
      {icon || ""}
      {label}
    </button>
  );
};

export default CommonButton;
