import "./Login.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onclickHandler = async () => {
    const postData = { email, password };
    console.log(postData);
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
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
            required={true}
          />
        </div>
        <div className="auth-input-container">
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
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
