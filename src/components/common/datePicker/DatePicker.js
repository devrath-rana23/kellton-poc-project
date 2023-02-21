import moment from "moment";
import "./DatePicker.css";

export const DatePicker = ({
  label,
  value,
  onChange = () => {},
  addClass = "",
  required = false,
}) => {
  return (
    <div>
      {label && <label className="textfield-label-class">{label}</label>}
      <div className="datepicker-div">
        <input
          type={"date"}
          className="datepicker-class"
          value={moment(value).format("YYYY-MM-DD")}
          onChange={onChange}
          required={required}
          autoComplete="off"
        />
      </div>
    </div>
  );
};
