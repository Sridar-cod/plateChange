import React, { useState } from "react";

const DetailsPayment = ({ setChangeNext, setIsPlaceOrder }) => {
  const handleNext = (val) => {
  

    if (val === "next") {
      setChangeNext((changeNext) => (changeNext = "successPopUp"));
      setIsPlaceOrder(true)
    } else {
      setChangeNext((changeNext) => (changeNext = "address"));
    }
  };
  const [payment, setPayment] = useState({
    cash: true,
    online: false,
  });

  const handleChecked = (label) => {
    setPayment((prev) => ({
      ...prev,
      cash: label === "cash",
      online: label === "online",
    }));
  };

  return (
    <>
      <div className="d-flex flex-column align-items-between">
        <div className="detailsPayment-outter">
          <h2>Payment Option</h2>
          <div className="cash mt-3 d-flex ">
            <input
              type="radio"
              className="detailsPayment__input me-3"
              id="cash"
              name="payment"
              value="cash"
              checked={payment.cash}
              onChange={() => handleChecked("cash")}
            />
            <label htmlFor="cash" className="detailsPayment__lable">
              Cash on Delivery
            </label>
          </div>
          <div className="onlinePay d-flex mt-3">
            <input
              type="radio"
              className="detailsPayment__input me-3"
              id="online"
              name="payment"
              value="online"
              checked={payment.online}
              onChange={() => handleChecked("online")}
            />
            <label htmlFor="online" className="detailsPayment__lable">
              online payment
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <svg
            width={"20px"}
            className="cur-pointer"
            onClick={() => handleNext("back")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
          </svg>
          <button
            className="details-next-button"
            onClick={() => handleNext("next")}
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsPayment;
