import "./index.css";

const CommonInput = ({ label, type, placeholder, register, required }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(label.toLowerCase(), {required})} />
    </div>
  );
};

export default CommonInput;