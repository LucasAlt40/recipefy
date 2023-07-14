import "./index.css"

const CommonInput = ({
  label,
  type,
  placeholder,
  field,
  register,
  preventPaste,
  required,
}) => {
  const handlePaste = (event) => {
    if (preventPaste) {
      event.preventDefault()
    }
  }

  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(field, { required })}
        onPaste={handlePaste}
      />
    </div>
  )
}

export default CommonInput
