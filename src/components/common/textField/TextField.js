import "./TextField.css";

export const TextField = ({
  label,
  type = "text",
  value = "",
  onChange = () => {},
  addClass = "",
  required = false,
  placeholder = "",
}) => {
  return (
    <div>
      {label && <label className="textfield-label-class">{label}</label>}
      <div className="textfield-div">
        <input
          type={type}
          className={`textfield-input h-5 ${addClass}`}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
      <span className="error-message"></span>
    </div>
  );
};
