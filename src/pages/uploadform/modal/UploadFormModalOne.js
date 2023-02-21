import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { TextField } from "../../../components/common/textField/TextField";
import { constantText } from "../../../utils/constants/ConstantText";
import ImageUrls from "../../../utils/constants/ImageUrls";
import { notify } from "../../../utils/services/notify/notify";
import { validateInput } from "../../../utils/Utils";
import "./UploadFormModalOne.css";

export const UploadFormModalOne = (props) => {
  const [imageBlob, setImageBlob] = useState("");

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

  const onChangeHandler = (ev, field) => {
    const inputElement = ev.target.value;
    validateInput(ev, field, error, errorMessages, setError, setErrorMessages);
    let formInputCopy = formInput;
    formInputCopy = { ...formInputCopy, [field]: inputElement };
    setFormInput(formInputCopy);
  };
  return (
    <>
      <Transition appear show={props.uploadFormOne} as={Fragment}>
        <Dialog
          as="div"
          className="modal-class"
          onClose={() =>
            props.closeOnBack ? props.setUploadFormOne(false) : {}
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
                      <h2 className="dialog-heading">Upload form one</h2>
                      <span onClick={() => props.setUploadFormOne(false)}>
                        <img src={ImageUrls.close} alt="close" />
                      </span>
                    </div>
                    <div className="dialog-body-div">
                      <div className="uploadform-modal-input-container">
                        <div>
                          <label className="textfield-label-class">
                            Upload file
                          </label>
                          <div className="textfield-div">
                            <input
                              className="file-input"
                              name="company_logo"
                              type="file"
                              onChange={(ev) => getPhoto(ev)}
                            />
                          </div>
                          {imageBlob && (
                            <div className="custom-uploadform-thumbnail">
                              <img src={imageBlob} alt="company_logo" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="dialog-footer-div">
                      <button
                        type="button"
                        className="dialog-button"
                        onClick={() => props.setUploadFormOne(false)}
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
