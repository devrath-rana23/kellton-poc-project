import "./Registration.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onclickHandler = async () => {
    const postData = { name, email, password };
    console.log(postData);
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
            onChange={(ev) => setName(ev.target.value)}
            value={name}
            required={true}
          />
        </div>
        <div className="register-input-container">
          <TextField
            label="Email"
            placeholder="abc@yopmail.com"
            type="email"
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
            required={true}
          />
        </div>
        <div className="register-input-container">
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
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
