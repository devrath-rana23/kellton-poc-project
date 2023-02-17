import "./Registration.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Registration = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onclickHandler = async () => {
    const postData = formInput;
    console.log(postData);
  };

  const onChangeHandler = (ev, field) => {
    let formInputCopy = formInput;
    formInputCopy = { ...formInputCopy, [field]: ev.target.value };
    setFormInput(formInputCopy);
  };

  return (
    <>
      <div className="register-heading-container">
        <h1 className="register-heading">Register your account</h1>
        <div className="register-input-container">
          <TextField
            label="Name"
            placeholder="Abd Sha"
            type="text"
            onChange={(ev) => onChangeHandler(ev, "name")}
            value={formInput.name}
            required={true}
          />
        </div>
        <div className="register-input-container">
          <TextField
            label="Email"
            placeholder="abc@yopmail.com"
            type="email"
            onChange={(ev) => onChangeHandler(ev, "email")}
            value={formInput.email}
            required={true}
          />
        </div>
        <div className="register-input-container">
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={(ev) => onChangeHandler(ev, "password")}
            value={formInput.password}
            required={true}
          />
        </div>
        <div className="register-btn-container">
          <button onClick={onclickHandler} className="register-btn-class">
            <span>Create account</span>
          </button>
        </div>
        <p className="bottom-link">
          <span className="bottom-link-btn" onClick={() => navigate("/login")}>
            Already have an account?
            <u>
              <strong> Sign in</strong>
            </u>
          </span>
        </p>
      </div>
    </>
  );
};
