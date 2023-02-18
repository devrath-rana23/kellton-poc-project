import "./Login.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../../utils/Utils";
import { notify } from "../../utils/services/notify/notify";
import { constantText } from "../../utils/constants/ConstantText";

export const Login = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ email: false, password: false });

  const onSubmitHandler = async (ev) => {
    ev.preventDefault();
    if (!Object.values(error).includes(true)) {
      const postData = formInput;
      console.log(postData);
      return;
    }
    notify.error(constantText.ENTER_VALID_INPUTS);
  };

  const onChangeHandler = (ev, field) => {
    const inputElement = ev.target.value;
    validateInput(ev, field, error, errorMessages, setError, setErrorMessages);
    let formInputCopy = formInput;
    formInputCopy = { ...formInputCopy, [field]: inputElement };
    setFormInput(formInputCopy);
  };

  return (
    <>
      <form onSubmit={(ev) => onSubmitHandler(ev)}>
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
              hasError={error.email}
              errorMessage={errorMessages.email}
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
              hasError={error.password}
              errorMessage={errorMessages.password}
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
            <button className="auth-btn-class">
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
      </form>
    </>
  );
};
