import React, { useState } from "react";

const CardOfYourList = ({
  showPostData,
  setPostData,
  handleEditPost,
  setIsAddPost,
  isAddPost,
}) => {
  // const postList = addPostData.postData;
  const [orderStatus, setOrderStatus] = useState("");
  const handleOrders = (val) => {
    if (val === "confirm") {
      setOrderStatus("confirm");
    } else {
      setOrderStatus("decline");
    }
  };

  const handleDeletePost = (id) => {
    const newList = showPostData.filter((card) => card.id !== id);
    setPostData(newList);
  };
  return (
    <>
      <div className=" d-flex flex-column align-items-center ">
        {showPostData.length == 0 ? (
          <p className="list-empty-text">Your List Is Empty</p>
        ) : (
          showPostData?.map((items, index) => {
            const modalId = `exampleModalCenter-${index}`;
            return (
              <>
                <div className="CardOfYourList  mb-4" key={index}>
                  <div className="d-flex gap-3 CardOfYourList__inner">
                    <div className="">
                      <img
                        src={items.foodImg}
                        className="CardOfYourList__img"
                        alt="food img"
                        width={"90px"}
                        height={"90px"}
                      />
                    </div>
                    <div className="d-flex flex-column w-100">
                      <h3 className="yourListParent__font">
                        {items.food_name.slice(0, 10)}
                        {items.food_name.length > 10 ? "..." : null}
                      </h3>
                      <p className="m-0">
                        <b>Catogary: </b>
                        {items.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                      </p>
                      <p className="m-0">
                        <b>Quantity:</b> {items.quantity}
                      </p>
                      <small className="yourListParent__font">
                        <b>Posted Time:</b> {items.expired_time}
                      </small>
                      <h4 className="m-0">
                        <b>Price:</b> {items.price}
                      </h4>

                      <button
                        className="mb-2 mt-2  yourListParent__font"
                        onClick={() => {
                          handleEditPost(items.id);
                          setIsAddPost(!isAddPost);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="yourListParent__font post-delete-button"
                        // data-toggle="modal"
                        // data-target={`#${modalId}`}
                        onClick={() => handleDeletePost(items.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                {/* delete pop */}
                {/* <div
                  className="modal fad popp "
                  id={modalId}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby={`${modalId}-title`}
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={`${modalId}-title`}>
                          Delete
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to delete this post
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn post-delete-popup"
                          data-dismiss="modal"
                          onClick={() => handleDeletePost(items.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default CardOfYourList;
