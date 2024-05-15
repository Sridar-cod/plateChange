import React from "react";

const LoginPopUp = () => {
  return (
    <>
      <div
        className="modal fade"
        id="login"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="">
              <h1 className=" signUp-h5 " id="exampleModalLabel">
                Login
              </h1>
            </div>
            <form>
              <div className="modal-body">
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="number" className="signUp-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder=" Phone Number"
                    className="signUp-input"
                    // id="phoneNumber"
                    name="phoneNumber"
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label htmlFor="name" className="signUp-label">
                    OTP
                  </label>
                  <input
                    type="number"
                    placeholder="OTP"
                    className="signUp-input"
                    required
                    // id="OTP"
                    name="OTP"
                  />
                </div>
              </div>

              <div className="d-flex p-3 justify-content-center">
                <button type="submit" className="signUp-button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopUp;
