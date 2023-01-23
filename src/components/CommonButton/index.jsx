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
  border = "none",
  ...rest
}) => {
  const style = {
    background: bgColor,
    color: fontColor,
    fontSize: fontSize,
    width: width,
    height: height,
    border: `2px solid ${border}`,
  };

  return (
    <button className={`common-button ${(shadow && "shadow-button")}`} {...rest} style={style}>
      {icon || ""}
      {label}
    </button>
  );
};

export default CommonButton;
