import "./Header.css";
import ImageUrls from "../../../utils/constants/ImageUrls";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChangePasswordModal } from "./ChangePasswordModal";

export const Header = () => {
  const navigate = useNavigate();
  const [changePassword, setChangePassword] = useState(false);

  return (
    <header>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <div>
              <a
                href="javascript:void(0)"
                onClick={() => {
                  navigate("upload-form");
                }}
              >
                <li>Upload</li>
              </a>
            </div>
          </ul>
        </div>
      </nav>
      <figure>
        <img className="header-logo" src={ImageUrls.logo} alt="" />
      </figure>
      <Menu as={`div`} className="header-avatar-container">
        <figure className="header-profile-pic-container">
          <Menu.Button as={`span`}>
            <img
              className="header-profile-pic"
              src={ImageUrls.avatarPlaceholder}
              alt="avatarPlaceholder"
            />
          </Menu.Button>
        </figure>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="float-box">
            <Menu.Item>
              {({ active }) => (
                <div className="">
                  <button
                    className={`${
                      active ? "active-btn-class" : ""
                    } float-box-link1-btn`}
                    onClick={() => {
                      navigate("/edit-profile");
                    }}
                  >
                    <span>Company</span>
                  </button>
                </div>
              )}
            </Menu.Item>
            <div className="flex-btns-container">
              <Menu.Item>
                {({ active }) => (
                  <div className="border-top-class-for-button">
                    <button
                      className={`${
                        active ? "active-btn-class" : ""
                      } float-box-link-btn`}
                      onClick={() => {
                        setChangePassword(!changePassword);
                      }}
                    >
                      <img
                        className="logout-logo-icon"
                        src={ImageUrls.logout_icon}
                        alt=""
                      />
                      <span>Change password</span>
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className="border-top-class-for-button">
                    <button
                      className={`${
                        active ? "active-btn-class" : ""
                      } float-box-link-btn`}
                      onClick={() => {}}
                    >
                      <img
                        className="logout-logo-icon"
                        src={ImageUrls.logout_icon}
                        alt=""
                      />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {changePassword && (
        <ChangePasswordModal
          changePassword={changePassword}
          setChangePassword={setChangePassword}
          closeOnBack={true}
        />
      )}
    </header>
  );
};
