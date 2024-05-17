import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data,locationId }) => {
  return (
    <>
      {data?.map((items, index) => {
        return (
          <div
            className="outter-card p-2"
            key={items.id}
            // style={{
            //   border: `4px solid ${items.vegetarian ? "#016c13" : "#ffffff"}`,
            // }}
          >
            <div className="inner-card d-flex justify-content-center">
              <img
                src={items.foodImg}
                alt=""
                width={"300px"}
                height={"150px"}
                loading="lazy"
                className="inner-card__img"
              />
            </div>

            <div className="outter-card__title">
              <h1 className="popFont-big m-0 p-0">{items.food_name}</h1>

              <p className="m-0 popFont-smaller">
                <b>Catogary: </b>
                {items.vegetarian ? "Vegetarian" : "Non-vegetarian"}
              </p>

              <p className="m-0 popFont-smaller">
                <b>Expired time: </b>
                {items.expired_time}
              </p>

              <p className="popFont-smaller m-0">
               <b> Available Qty :{" "}</b>
                {`${items.quantity}  ${
                  items.food_per_person ? "Person" : "Per Item"
                }`}
              </p>
            </div>

            <div className="d-flex justify-content-between">
              <div className="">
                <h3>
                  &#8377; <b>{items.price}</b>
                </h3>
                {/* <p className="">{`For Each  ${
                  items.food_per_person ? "Person" : "Item"
                }`}</p> */}
              </div>
              <div className="">
                 <Link to={`details/${items.id}`}> 
                  <button
                    className="outter-card__button popFont-smaller"
                    style={
                      items.vegetarian ? { border: "2px solid #fffff" } : {}
                    }
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
