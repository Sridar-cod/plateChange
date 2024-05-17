import React, { useEffect } from "react";
import "./detailsPage.css";
import DetailsLeft from "./DetailsLeft";
import DetailsRight from "./detailsRight/DetailsRight";
const DetailsParent = ({ userData,setOrderVisible, locationId,setOrderList,isPlaceOrder,setIsPlaceOrder}) => {
  const location = locationId.toLowerCase();
  const locationData = userData[location];
  return (
    <>
      <div className="w-100 row cardDetails-outter">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-7 col-xxl-7">
          <DetailsLeft
            locationData={locationData}
            setOrderList={setOrderList}
            isPlaceOrder={isPlaceOrder}
            setIsPlaceOrder={setIsPlaceOrder}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-5 col-xxl-5">
          <DetailsRight
            setIsPlaceOrder={setIsPlaceOrder}
            locationId={locationId}
            setOrderVisible={setOrderVisible}
          />
        </div>
      </div>
    </>
  );
};

export default DetailsParent;
