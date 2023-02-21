import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { constantText } from "../../../utils/constants/ConstantText";
import ImageUrls from "../../../utils/constants/ImageUrls";
import { notify } from "../../../utils/services/notify/notify";
import { validateInput } from "../../../utils/Utils";
import { TextField } from "../textField/TextField";
import "./ChangePassword.css";

export const ChangePasswordModal = (props) => {
  const [errorMessages, setErrorMessages] = useState({
    password: "",
  });
  const [formInput, setFormInput] = useState({
    password: "",
  });
  const [error, setError] = useState({
    password: false,
  });

  const saveProfileData = async (ev) => {
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
      <Transition appear show={props.changePassword} as={Fragment}>
        <Dialog
          as="div"
          className="modal-class"
          onClose={() =>
            props.closeOnBack ? props.setChangePassword(false) : {}
          }
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="modal-class-div" />
          </Transition.Child>

          <div className="modal-class-div2">
            <div className="modal-class-div3">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <form
                  className="dialog-form"
                  onSubmit={(ev) => saveProfileData(ev)}
                >
                  <Dialog.Panel as="div" className="dialog-div">
                    <div className="dialog-header-div">
                      <h2 className="dialog-heading">Change Password</h2>
                      <span onClick={() => props.setChangePassword(false)}>
                        <img src={ImageUrls.close} alt="close" />
                      </span>
                    </div>
                    <div className="dialog-body-div">
                      <div className="changepass-input-container">
                        <TextField
                          label="Current Password"
                          placeholder="Enter password"
                          type="password"
                          onChange={(ev) => onChangeHandler(ev, "password")}
                          value={formInput.password}
                          required={true}
                          hasError={error.password}
                          errorMessage={errorMessages.password}
                        />
                      </div>
                      <div className="changepass-input-container">
                        <TextField
                          label="New Password"
                          placeholder="Enter password"
                          type="password"
                          onChange={(ev) => onChangeHandler(ev, "password")}
                          value={formInput.password}
                          required={true}
                          hasError={error.password}
                          errorMessage={errorMessages.password}
                        />
                      </div>
                      <div className="changepass-input-container">
                        <TextField
                          label="Confirm Password"
                          placeholder="Enter password"
                          type="password"
                          onChange={(ev) => onChangeHandler(ev, "password")}
                          value={formInput.password}
                          required={true}
                          hasError={error.password}
                          errorMessage={errorMessages.password}
                        />
                      </div>
                    </div>

                    <div className="dialog-footer-div">
                      <button
                        type="button"
                        className="dialog-button"
                        onClick={() => props.setChangePassword(false)}
                      >
                        <p className="dialog-footer-btn-text">Cancel</p>
                      </button>
                      <button type="submit" className="dialog-button2">
                        <p className="dialog-footer-btn-text2">Save</p>
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
