import "./index.css";

const CommonInput = ({ label, type, placeholder, ...rest }) => {
  return (
    <div className="input-container">
      <label htmlFor={type}>{label}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default CommonInput;