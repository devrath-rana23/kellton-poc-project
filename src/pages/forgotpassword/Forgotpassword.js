import "./Forgotpassword.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Forgotpassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onclickHandler = async () => {
    const postData = { email };
    console.log(postData);
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
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
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
