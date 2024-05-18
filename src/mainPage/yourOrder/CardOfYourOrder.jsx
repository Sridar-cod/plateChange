import React from "react";

const CardOfYourOrder = ({ orderList }) => {
  return (
    <>
      {orderList.length > 0 ? (
        orderList?.map((items) => {
          return (
            <div className="cardOfYourOrder mb-4">
              <div className="">
                <div className="d-flex justify-content-around align-items-ceter pt-1 gap-2">
                  <div className="d-flex justify-content-center">
                    <img
                      src={items.foodImg}
                      alt=""
                      width={"100px"}
                      height={"100px"}
                      className="cardOfYourOrder__img "
                    />
                  </div>
                  <div className="">
                    <h5 className="font-poppins">
                      <b>{items.food_name}</b>
                    </h5>
                    <b className="font-poppins">Catogary: </b>
                    <small  className="font-poppins">{items.vegetarian ? "Veg" : "Non-Veg"}</small>
                    <p className="m-0 p-0 font-poppins">
                      <b>Expired Time: </b>
                      {items.expired_time}
                    </p>
                    <h5 className="font-poppins">
                      <b>Price: </b>
                      {`${items.price}Rs`}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p  className="font-poppins order-empty-text">Your List is Empty</p>
      )}
      
    </>
  );
};

export default CardOfYourOrder;
