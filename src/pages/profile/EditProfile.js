import "./EditProfile.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../../utils/Utils";
import { notify } from "../../utils/services/notify/notify";
import { constantText } from "../../utils/constants/ConstantText";
import { DatePicker } from "../../components/common/datePicker/DatePicker";

export const EditProfile = () => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [imageBlob, setImageBlob] = useState("");
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    password: "",
  });
  const [formInput, setFormInput] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    firstname: false,
    lastname: false,
    company: "",
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

  const getPhoto = (ev) => {
    let reader = new FileReader();
    let file = ev.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      // fileName: file.title,
      // base64: reader.result
      setImageBlob(reader.result);
    };
  };

  return (
    <>
      <form className="edit-profile-form" onSubmit={(ev) => onSubmitHandler(ev)}>
        <div className="edit-profile-heading-container">
          <h1 className="edit-profile-heading">Profile</h1>
          <div className="edit-profile-input-container flex-form">
            <TextField
              label="First Name"
              placeholder="Abd Sha"
              type="text"
              onChange={(ev) => onChangeHandler(ev, "firstname")}
              value={formInput.firstname}
              required={true}
              hasError={error.firstname}
              errorMessage={errorMessages.firstname}
            />
            <TextField
              label="Last Name"
              placeholder="Abd Sha"
              type="text"
              onChange={(ev) => onChangeHandler(ev, "lastname")}
              value={formInput.lastname}
              required={true}
              hasError={error.lastname}
              errorMessage={errorMessages.lastname}
            />
          </div>
          <div className="edit-profile-input-container flex-form">
            <TextField
              label="Company"
              placeholder="Netflix"
              type="text"
              onChange={(ev) => onChangeHandler(ev, "company")}
              value={formInput.company}
              required={true}
              hasError={error.company}
              errorMessage={errorMessages.company}
            />
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
          <div className="edit-profile-input-container">
            <div>
              <DatePicker
                label="Date of Birth"
                value={dateOfBirth}
                onChange={(ev) => onChangeHandler(ev, "date_of_birth")}
                required={false}
              />
            </div>
          </div>
          <div className="edit-profile-input-container">
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
          <div className="edit-profile-input-container">
            <div>
              <label className="textfield-label-class">Gender</label>
              <div className="select-div">
                <select className="select-dropdown" name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="edit-profile-btn-container">
            <button className="edit-profile-btn-class">
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
