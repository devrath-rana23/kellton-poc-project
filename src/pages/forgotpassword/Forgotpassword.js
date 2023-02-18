import "./Forgotpassword.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../../utils/Utils";
import { notify } from "../../utils/services/notify/notify";
import { constantText } from "../../utils/constants/ConstantText";

export const Forgotpassword = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    email: "",
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
        <div className="forgotpass-heading-container">
          <h1 className="forgotpass-heading">Forgot Password</h1>
          <p className="forgotpass-para">
            No Problem! Enter your email below and we will send you an email
            with instruction to reset your password.
          </p>
          <div className="forgotpass-input-container">
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
          <div className="forgotpass-btn-container">
            <button className="forgotpass-btn-class">
              <span>Send reset link</span>
            </button>
          </div>
          <p className="bottom-link">
            <span
              className="bottom-link-btn"
              onClick={() => navigate("/login")}
            >
              Back to
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
