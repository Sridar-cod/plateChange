import React, { useState } from "react";
import DetailsAddress from "./DetailsAddress";
import DetailsPayment from "./DetailsPayment";
import SuccessPopUp from "./SuccessPopUp";

const DetailsRight = ({setIsPlaceOrder,locationId,setOrderVisible}) => {
  const [changeNext, setChangeNext] = useState("address");
  return (
    <>
      <div className="detailsRight ">
        {changeNext === "address" ? (
          <DetailsAddress
            setChangeNext={setChangeNext}
          />
        ) : changeNext === "payment" ? (
            <DetailsPayment
              setChangeNext={setChangeNext}
              setIsPlaceOrder={setIsPlaceOrder}
            />
        ) : (
              <SuccessPopUp
                locationId={locationId}
                setOrderVisible={setOrderVisible}
              />
        )}
      </div>
    </>
  );
};

export default DetailsRight;
