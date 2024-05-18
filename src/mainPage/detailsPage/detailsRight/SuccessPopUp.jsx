import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPopUp = ({locationId,setOrderVisible}) => {
  const navigate = useNavigate();

  const orderSuccess = (msg) => {
    navigate(`/home/${locationId}`);
    if (msg === "order list") {
      setOrderVisible(true)
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Order Status
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={()=>orderSuccess("cancle")} 
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div classNameName="successPopUp-outter d-flex justify-content-center">
                <div classNameName="successPopUp">
                <h2><img src="/assets/success.gif" alt="" width={"40px"} />
                   Order Has Been Placed!</h2>
                  <p>
                    Thank you for your order! We've received your request and
                    it's now being processed. Once the seller accepts your
                    order, you will receive a confirmation message or phone call
                  </p>
                  <p>
                    For further details or to track your order, you can check
                    the status in your order list.
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                aria-label="Close"
                onClick={()=>orderSuccess("cancle")} 
              >
                Close
              </button>
              <button type="button" onClick={()=>orderSuccess("order list")} className="order-success-but"  data-dismiss="modal" >
                Order List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPopUp;
