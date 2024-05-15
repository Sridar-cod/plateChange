import React from "react";

const CardOfYourOrder = ({ data }) => {
  console.log(data, "order1");
  const datas = data.orderList;
  console.log(datas, "data of order card");

  return (
    <>
      {datas.length > 0 ? (
        datas?.map((items) => {
          return (
            <div className="cardOfYourOrder mb-4">
              <div className="">
                {/* <h5>
                  <b>Order Details:</b>
                </h5> */}
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
                    <small  className="font-poppins">{items.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</small>
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
              <div className="mt-3">
                {/* <h5>
                  <b>Order Status:</b>
                </h5> */}
                <div className="">
                  <ul>
                    {/* <li>
                    {items.orderStatus.confirmation}
                  </li>
                  <li>{items.orderStatus.orderPick}</li>
                  <li>{items.orderStatus.sellerMessage}</li> */}
                  </ul>
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
