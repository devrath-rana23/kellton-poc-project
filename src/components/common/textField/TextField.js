import "./TextField.css";

export const TextField = ({
  label,
  type = "text",
  value = "",
  onChange = () => {},
  addClass = "",
  required = false,
  placeholder = "",
  hasError = false,
  errorMessage = "",
}) => {
  return (
    <div>
      {label && <label className="textfield-label-class">{label}</label>}
      <div className="textfield-div">
        <input
          type={type}
          className={`textfield-input ${addClass}`}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
      {hasError && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};
