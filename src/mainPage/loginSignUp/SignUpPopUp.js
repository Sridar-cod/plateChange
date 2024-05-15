import React from "react";

const SignUpPopUp = () => {
  return (
    <>
      <div
        className="modal fade"
        id="signUp"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="">
              <h1 className=" signUp-h5 " id="exampleModalLabel">
                Sign Up
              </h1>
            </div>
            <form>
              <div className="modal-body">
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="name" className="signUp-label">
                    Name
                  </label>
                  <input
                    type="text"
                    // id="name"
                    name="name"
                    required
                    placeholder="Name"
                    className="signUp-input"
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="number" className="signUp-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    // id="number"
                    name="number"
                    required
                    placeholder="Phone Number"
                    className="signUp-input"
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="email" className="signUp-label">
                    Email
                  </label>
                  <input
                    type="email"
                    // id="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="signUp-input"
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="password" className="signUp-label">
                    Password
                  </label>
                  <input
                    type="password"
                    // id="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="signUp-input"
                  />
                </div>
              </div>
              <div className="d-flex p-3 justify-content-center">
                <button type="submit" className="signUp-button" >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPopUp;
