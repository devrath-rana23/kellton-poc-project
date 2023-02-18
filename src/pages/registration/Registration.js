import "./Registration.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../../utils/Utils";
import { notify } from "../../utils/services/notify/notify";
import { constantText } from "../../utils/constants/ConstantText";

export const Registration = () => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
  });

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
              hasError={error.name}
              errorMessage={errorMessages.name}
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
              hasError={error.email}
              errorMessage={errorMessages.email}
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
              hasError={error.password}
              errorMessage={errorMessages.password}
            />
          </div>
          <div className="register-btn-container">
            <button className="register-btn-class">
              <span>Create account</span>
            </button>
          </div>
          <p className="bottom-link">
            <span
              className="bottom-link-btn"
              onClick={() => navigate("/login")}
            >
              Already have an account?
              <u>
                <strong> Sign in</strong>
              </u>
            </span>
          </p>
        </div>
      </form>
    </>
  );
};
