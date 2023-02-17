import "./Login.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../../utils/Utils";

export const Login = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ default: false });

  const onclickHandler = async () => {
    if (error.default && Object.keys(error).length === 1) {
      const postData = formInput;
      console.log(postData);
    }
  };

  const onChangeHandler = (ev, field) => {
    const inputElement = ev.target.value;
    const errorMessageElement =
      ev.target.parentNode.parentNode.getElementsByClassName(
        "error-message"
      )[0];
    errorMessageElement.style.display = "none";
    if (!validateInput(ev, field, error, setError).isValid) {
      errorMessageElement.innerText = validateInput(
        ev,
        field,
        error,
        setError
      ).errorMessage;
      errorMessageElement.style.display = "block";
    }
    let formInputCopy = formInput;
    formInputCopy = { ...formInputCopy, [field]: inputElement };
    setFormInput(formInputCopy);
  };

  return (
    <>
      <div className="signin-heading-container">
        <h1 className="signin-heading">Sign in to your account</h1>
        <div className="auth-input-container">
          <TextField
            label="Email"
            placeholder="abc@yopmail.com"
            type="email"
            onChange={(ev) => onChangeHandler(ev, "email")}
            value={formInput.email}
            required={true}
          />
        </div>
        <div className="auth-input-container">
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={(ev) => onChangeHandler(ev, "password")}
            value={formInput.password}
            required={true}
          />
        </div>
        <p className="bottom-link">
          <span
            className="bottom-link-btn"
            onClick={() => navigate("/forgotpassword")}
          >
            <u>
              <strong>forgot password?</strong>
            </u>
          </span>
        </p>
        <div className="auth-btn-container">
          <button onClick={onclickHandler} className="auth-btn-class">
            <span>Sign in</span>
          </button>
        </div>
        <p className="bottom-link">
          <span
            className="bottom-link-btn"
            onClick={() => navigate("/registration")}
          >
            Don't have an account?
            <u>
              <strong> Sign up</strong>
            </u>
          </span>
        </p>
      </div>
    </>
  );
};
