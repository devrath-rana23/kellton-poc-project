import { Outlet } from "react-router-dom";
import ImageUrls from "../../../utils/constants/ImageUrls";
import "./Unauthorized.css";

export const Unauthorized = (props) => {
  return (
    <div className="authBody">
      <section className="leftSection"></section>
      <section className="rightSection">
        <section className="logoSection">
          <figure className="logoContainer">
            <img className="logo" src={ImageUrls.logo} alt="logo" />
          </figure>
        </section>
        <section className="signInSection">
          <div className="poc-heading-container">
            <h1 className="poc-heading">PROJECT NAME</h1>
          </div>
          {props.children ?? <Outlet />}
        </section>
      </section>
    </div>
  );
};
