import React from "react";
import SignUpPopUp from "../loginSignUp/SignUpPopUp";
import LoginPopUp from "../loginSignUp/LoginPopUp";
import { Link } from "react-router-dom";
import SelectLocation from "../../landingPage/SelectLocation";

const Navigation = ({
  handleSideSection,
  locationId,
  locationList,
  handleSelectLocation,
  setSendMsg,
  setIsAddPost,
  isAddPost,
}) => {
  return (
    <nav
      className="d-flex navigation-outter justify-content-between align-items-center ps-4 pe-5 pt-1 pb-1"
      id="top"
    >
      <section className="d-flex  gap-4">
        <img src="/assets/logo.svg" alt="" width={"40px"} />

        <div className="d-flex flex-column justify-content-center gap-2">
          <button
            className="button__com-login"
            data-toggle="modal"
            data-target="#login"
          >
            Login
          </button>
          <button
            className="button__com-signUp"
            data-toggle="modal"
            data-target="#signUp"
          >
            Sign Up
          </button>
        </div>
      </section>

      <div className="location d-flex align-items-center">
        <span className="location__span">
          <SelectLocation
            handleSelectLocation={handleSelectLocation}
            locationList={locationList}
            locationId={locationId}
          />
          <svg
            width={"20px"}
            className="location__location-icon mt-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
        </span>
        <Link to={`/home/${locationId}`}>
          <button className="location__button">Find food</button>
        </Link>
      </div>

      <section className="d-flex justify-content-end align-items-center">
        <div
          className="createPost-outter d-flex justify-content-center  flex-column align-items-center pt-1 me-3 "
          // data-toggle="modal"
          // data-target="#exampleModalLong"
          onClick={() => {
            setIsAddPost(!isAddPost);
            setSendMsg("from add post");
          }}
        >
          {/*  setSendMsg('from add post') */}
          <svg
            width={"20px"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p className="p-0 mb-2">Add Post</p>
        </div>

        <div className="d-flex flex-column gap-2 ">
          <button
            onClick={() => handleSideSection("post")}
            className="button__com-post"
          >
            Post list
          </button>
          <button
            className="button__com-order"
            onClick={() => handleSideSection("order")}
          >
            Order list
          </button>
        </div>
      </section>
      <SignUpPopUp />
      <LoginPopUp />
    </nav>
  );
};

export default Navigation;
