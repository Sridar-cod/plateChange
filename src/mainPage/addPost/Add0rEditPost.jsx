import React, { useEffect, useState } from "react";
import "./addPost.css";
import { Link, useNavigate } from "react-router-dom";
// import addPostData from "./../../data/addPostData.json";
import { v4 as uuidv4 } from "uuid";
const AddOrEditPost = ({
  locationList,
  setPostData,
  locationId,
  showPostData,
  editUser,
  message,
  isAddPost,
  setIsAddPost,
  setEditUser,
  handleSubmit,
}) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const [uploadImg, setUploadImg] = useState(null);
  const [userPost, setUserPost] = useState({
    foodName: "",
    discription: "",
    vegetarian: false,
    per_person: false,
    quantity: 1,
    price: Number,
    location: "",
    foodImg: "",
    expired_time: "",
  });
  const [validation, setValidation] = useState({
    foodName: false,
    foodDiscription: false,
    expiredTime: false,
    price: false,
    foodImg: false,
  });

  useEffect(() => {
    if (message == "from edit post") {
      if (editUser) {
        setUserPost((prev) => ({
          ...prev,
          foodName: editUser.food_name,
          discription: editUser.food_description,
          vegetarian: editUser.vegetarian,
          per_person: editUser.food_per_person,
          price: editUser.price,
          location: editUser.location,
          foodImg: editUser.foodImg,
          expired_time: editUser.expired_time,
        }));

        setQuantityCount(editUser.quantity);
      }
    }
  }, [editUser]);

  const postForm = {
    id: uuidv4(),
    price: userPost.price,
    expired_time: userPost.expired_time,
    quantity: quantityCount,
    vegetarian: userPost.vegetarian,
    food_per_person: userPost.per_person,
    food_description: userPost.discription,
    food_name: userPost.foodName,
    location: userPost.location,
    foodImg: userPost.foodImg,
  };

  const handleForm = (e, label) => {
    const value = e.target ? e.target.value : e;
    setUserPost((preState) => ({
      ...preState,
      [label]: value,
    }));
  };

  useEffect(() => {
    if (!uploadImg || uploadImg.length === 0) return;

    const imageUrl = URL.createObjectURL(uploadImg[0]);
    console.log(imageUrl, "urlimg");
    setUserPost((pre) => {
      return {
        ...pre,
        foodImg: imageUrl,
      };
    });

    // // Clean up the URL.createObjectURL call
    // return () => URL.revokeObjectURL(imageUrl);
  }, [uploadImg]);

  const handleFormVegetarian = (e, label) => {
    const { value } = e.target;
    setUserPost((prevState) => ({
      ...prevState,
      [label]: value === "veg",
    }));
  };

  const handleFormPer = (e, label) => {
    const { value } = e.target;
    setUserPost((prevState) => ({
      ...prevState,
      [label]: value === "person",
    }));
  };

  function handleQuantityCount(val) {
    if (val === "incre" && quantityCount <= 29)
      setQuantityCount(() => quantityCount + 1);

    if (quantityCount >= 1 && val === "decre")
      setQuantityCount(() => quantityCount - 1);
  }

  const formValidation = () => {
    let isValid = true;
    if (!userPost.foodName) {
      setValidation((pre) => ({ ...pre, foodName: true }));
      isValid = false;
    } else {
      setValidation((pre) => ({ ...pre, foodName: false }));
    }

    if (!userPost.discription) {
      setValidation((pre) => ({ ...pre, foodDiscription: true }));
      isValid = false;
    } else {
      setValidation((pre) => ({ ...pre, foodDiscription: false }));
    }

    if (!userPost.foodImg) {
      setValidation((pre) => ({ ...pre, foodImg: true }));
      isValid = false;
    } else {
      setValidation((pre) => ({ ...pre, foodImg: false }));
    }

    if (!userPost.expired_time) {
      setValidation((pre) => ({ ...pre, expiredTime: true }));
      isValid = false;
    } else {
      setValidation((pre) => ({ ...pre, expiredTime: false }));
    }
    if (isNaN(userPost.price) || userPost.price <= 0) {
      setValidation((pre) => ({ ...pre, price: true }));
      isValid = false;
    } else {
      setValidation((pre) => ({ ...pre, price: false }));
    }

    return isValid;
  };

  const handleSubmitForm = (msg) => {
    const isValid = formValidation();

    if (isValid) {
      if (msg === "from add post") {
        setPostData([...showPostData, postForm]);
        handleSubmit("addNewPost");
      } else {
        if (editUser) {
          const editedIndex = showPostData.findIndex(
            (post) => post.id === editUser.id
          );

          if (editedIndex !== -1) {
            const updatedShowPostData = [...showPostData];
            updatedShowPostData[editedIndex] = postForm;
            setPostData(updatedShowPostData);
          }
        }
        handleSubmit("editPost");
      }
      setUserPost({
        foodName: "",
        discription: "",
        vegetarian: false,
        per_person: false,
        quantity: 0,
        price: 0,
        location: "",
        foodImg: "",
        expired_time: "00:00",
      });

      // setIsAddPost(!isAddPost);
    }
  };

  // console.log(imgUrl.img,'urllll')
  const navigate = useNavigate();
  const handleNavigate = () => {
    // Navigate to the home page
    navigate(`/home/${locationId}`);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="formParent mb-5">
        {validation.foodImg ? (
          <span className="formParent__validText">Image Required *</span>
        ) : null}
        {/* <form action=""> */}
        <div
          className="formParent__uploadImg"
          // style={{ backgroundImage: `url(${userPost.foodImg})` }}
        >
          <p>Upload your food picture</p>
          <input
            required
            id="upload-input"
            name="upload-input"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setUploadImg(e.target.files);
              }
            }}
            style={{ display: "none" }} // Hide the input element
          />
          <label htmlFor="upload-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={"30px"}
              style={{ cursor: "pointer" }}
            >
              <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
          </label>
        </div>
        {userPost.foodImg.length !== 0 ? (
          <span className="formParent_picText ">
            Picture Uploaded
            <svg
              className="ms-2"
              width={"20px"}
              height={"20px"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
            </svg>
          </span>
        ) : null}
        <div className="formParent__name formParent__form-div">
          <label htmlFor="name" className="addPost-lable">
            Name *
          </label>
          {validation.foodName ? (
            <span className="formParent__validText">Name Required</span>
          ) : null}
          <input
            type="text"
            required
            id="name"
            name="food name"
            placeholder="Sridar M"
            className="addPost-input"
            value={userPost.foodName}
            onChange={(e) => handleForm(e, "foodName")}
          />
        </div>
        <div className="formParent__discription formParent__form-div">
          <label htmlFor="discription" className="addPost-lable">
            Discription *
          </label>
          {validation.foodDiscription ? (
            <span className="formParent__validText">Discription Required</span>
          ) : null}
          <textarea
            required
            placeholder="About food "
            className="addPost-input "
            name="discription"
            id="discription"
            cols="40"
            rows="6"
            value={userPost.discription}
            onChange={(e) => handleForm(e, "discription")}
          ></textarea>
        </div>
        <div className="formParent__category formParent__form-div d-flex ">
          <label htmlFor="category" className="addPost-lable">
            Category *
          </label>
          <div className="d-flex justify-content- ">
            <div className="d-flex justify-content-center align-items-center gap-2 ">
              <input
                type="radio"
                id="veg"
                name="category"
                className="formParent__formRadio "
                value="veg"
                checked={userPost.vegetarian}
                onChange={(e) => handleFormVegetarian(e, "vegetarian")}
              />
              <label htmlFor="veg" className="addPost-lable-small ">
                Vegetorian
              </label>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2 formParent__radio-div">
              <input
                type="radio"
                id="non-veg"
                name="category"
                className="formParent__formRadio"
                value="non-veg"
                checked={!userPost.vegetarian}
                onChange={(e) => handleFormVegetarian(e, "vegetarian")}
              />
              <label htmlFor="non-veg" className="addPost-lable-small">
                Non-Veg
              </label>
            </div>
          </div>
        </div>

        <div className="formParent__measurement formParent__form-div ">
          {/* <label htmlFor="measurement" className="addPost-lable">
            Measurement *
          </label> */}
          <div className="formParent__measurement__quantity d-flex align-items-center">
            <label htmlFor="quantity " className="addPost-lable">
              Quantity:
            </label>
            <div className="d-flex gap-2 ms-4 mb-1">
              <svg
                width={"15px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="cur-pointer"
                onClick={() => handleQuantityCount("decre")}
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
              </svg>
              <span className="formParent__measurement__span">
                {quantityCount}
              </span>
              <svg
                width={"15px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="cur-pointer"
                onClick={() => handleQuantityCount("incre")}
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
          </div>
          <div className="formParent__measurement__forWhom d-flex flex">
            <div className="d-flex gap-2  ">
              <input
                type="radio"
                id="person"
                className="formParent__formRadio"
                name="quantity"
                value="person"
                checked={userPost.per_person}
                onChange={(e) => handleFormPer(e, "per_person")}
              />
              <label htmlFor="person" className="addPost-lable-small">
                Per Person
              </label>
            </div>
            <div className="d-flex gap-2 ms-5">
              <input
                type="radio"
                value="items"
                checked={!userPost.per_person}
                onChange={(e) => handleFormPer(e, "per_person")}
                id="items"
                className="formParent__formRadio"
                name="quantity"
              />
              <label htmlFor="items" className="addPost-lable-small">
                Per Items
              </label>
            </div>
          </div>
        </div>
        <div className="formParent__expiredTime formParent__form-div ">
          <label htmlFor="expiredTime" className="addPost-lable">
            Expired Time *
          </label>
          {validation.expiredTime ? (
            <span className="formParent__validText">Expired Time Required</span>
          ) : null}
          <div className="">
            <input
              required
              type="time"
              placeholder="2 Hours"
              max={"24"}
              min={"1"}
              className="formParent__expiredTime__input "
              value={userPost.expired_time}
              onChange={(e) => handleForm(e, "expired_time")}
            />
            {/* <span className="ms-2 addPost-lable-small">Hr</span> */}
          </div>
        </div>
        <div className="formParent__location formParent__form-div  ">
          <label htmlFor="location" className="addPost-lable">
            Location *
          </label>
          <div className=" gap-5 ">
            <div className="formParent__measurement__city mb-3 d-flex  gap-3 ">
              {/* <label htmlFor="city" className="addPost-lable-small me-2 ">
                City
              </label> */}
              <select
                name="city"
                id="city"
                className="addPost-select"
                value={userPost.location}
                onChange={(e) => handleForm(e, "location")}
                defaultValue={locationList[0]}
              >
                {locationList?.map((location, index) => {
                  return (
                    <option value={location} key={index}>
                      {location}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="formParent__price formParent__form-div d-flex">
          <label htmlFor="price" className="addPost__price-label">
            Price *
          </label>
          {validation.price ? (
            <span className="formParent__validText">Price Required</span>
          ) : null}
          <input
            required
            min={"1"}
            max={"1000"}
            type="number"
            className="addPost-price-input ps-2"
            placeholder="199Rs"
            value={userPost.price}
            onChange={(e) => handleForm(e, "price")}
          />
        </div>
        <div className="formParent__submit d-flex justify-content-center">
          <button
            type="button"
            className="bt addPost-submit"
            onClick={() => handleSubmitForm(message)}
          >
            Submit
          </button>
        </div>
        {/* </form> */}

        {/* <div
          className="modal fade openAddPostPop"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title pop-textgreen"
                  id="exampleModalLongTitle"
                >
                  Your Post as been added successfully
                </h5>
              </div>
              <div className="modal-body">
                Please check the post list for buyer notifications.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={handleNavigate}
                >
                  Home page
                </button>
                
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AddOrEditPost;
