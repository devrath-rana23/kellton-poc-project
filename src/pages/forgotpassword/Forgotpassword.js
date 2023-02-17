import "./Forgotpassword.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../../utils/Utils";

export const Forgotpassword = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
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
      <div className="forgotpass-heading-container">
        <h1 className="forgotpass-heading">Forgot Password</h1>
        <p className="forgotpass-para">
          No Problem! Enter your email or username below and we will send you an
          email with instruction to reset your password.
        </p>
        <div className="forgotpass-input-container">
          <TextField
            type="email"
            onChange={(ev) => onChangeHandler(ev, "email")}
            value={formInput.email}
            required={true}
            label="Email"
            placeholder="abc@yopmail.com"
          />
        </div>
        <div className="forgotpass-btn-container">
          <button onClick={onclickHandler} className="forgotpass-btn-class">
            <span>Send reset link</span>
          </button>
        </div>
        <p className="bottom-link">
          <span className="bottom-link-btn" onClick={() => navigate("/login")}>
            Back to
            <u>
              <strong> Sign in</strong>
            </u>
          </span>
        </p>
      </div>
    </>
  );
};
