import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsLeft = ({
  locationData,
  setOrderList,
  isPlaceOrder,
  setIsPlaceOrder,
}) => {
  const [error,setError] = useState(false)
  const { id } = useParams();
  let filterData = {}
  let filterDataArray = locationData.filter(val => val.id == id);
  if (filterDataArray.length ) {
    filterData = filterDataArray[0];
  }
    useEffect(() => {
      if (isPlaceOrder && filterDataArray.length > 0) {
        setOrderList((prev) => [...prev, filterData]);
        setIsPlaceOrder(false);
      }
    }, [isPlaceOrder, filterData, setOrderList, setIsPlaceOrder]);
  console.log(locationData,'loca')

  return (
    <>{
      error ? <div>
        <h1>click find food on the top</h1>
      </div> :
    
        <div className="d-flex justify-content-around  gap-4 detailsLeft  row">
          <div className="col-12  col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-5">
            <img
              src={filterData?.foodImg}
              alt="Selected Food"
              width={"250px"}
              height={"300px"}
              className="detailsLeft__img"
            />
          </div>
          <div className=" col-12 col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-5">
            <div className="">
              <h2 className="detailsPayment__lable">{filterData?.food_name}</h2>
              <p className="detailsLeftFont gray-text">
                {filterData?.food_description}
              </p>
            </div>
            <div className="">
              <p className="detailsLeftFont">
                <b>Catagory:</b>{" "}
                <span>
                  {filterData?.vegetarian ? "Veg" : "Non-Veg"}
                </span>
              </p>
            </div>
            <div className="">
              <p className="detailsLeftFont">
                <b>Availability:</b> <span> {filterData?.quantity} items</span>
              </p>
            </div>
            <div className="">
              <p className="detailsLeftFont">
                <b>Expired Time:</b> {filterData?.expired_time}
              </p>
            </div>
            <div className="">
              <p className="detailsLeftFont">
                <b>Location:</b> {filterData?.location}
              </p>
            </div>
            {/* <div className="">
           <small className="gray-text"> Food Per {filterData[0].food_per_person ? 'Person':'Items'}
           </small></div> */}
            <div className="d-flex justify-content-between">
              <h1>
                <b>Price:</b>
              </h1>
              <h2 className="detailsPayment__highLight">{filterData?.price} Rs</h2>
              {/* <button>move next</button> */}
            </div>
          </div>
        </div>
    }
    </>
  );
};

export default DetailsLeft;
