import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import ParentOfCards from "./cards/ParentOfCards";
import WhatsInYourMind from "./WhatsInYourMind";
import YourOrderParent from "../yourOrder/YourOrderParent";
import YourListParent from "../yourList/YourListParent";
import { useParams } from "react-router-dom";
import AddPostParent from "../addPost/AddPostParent";

const Home = ({
  postVisible,
  orderVisible,
  userData,
  setPostData,
  showPostData,
  locationId,
  locationList,
  sendMsg,
  setSendMsg,
  isAddPost,
  setIsAddPost,
  orderList,
  setPostVisible,
  handleSideSection,
}) => {
  //states management
  const [isLoader, setIsLoader] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [form, setForm] = useState({
    priceUp: false,
    priceDown: true,
    veg: false,
    nonVeg: true,
    eachPerson: false,
    eachItems: true,
  });

  const { id } = useParams();
  const location = id.toLowerCase();
  const locationData = userData[location];
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(locationData);
  }, [locationData]);

  //click post edit
  const handleEditPost = (id) => {
    setSendMsg("from edit post");
    const editPost = showPostData.filter((user) => user.id == id);
    console.log("formeditFunc", editPost[0]);
    setEditUser(editPost[0] || []);
  };

  //after submitting form
  const handleSubmit = (msg) => {
    if (msg === "addNewPost") {
      setIsLoader(!isLoader);
      setTimeout(() => {
        setIsLoader(false);
        setPostSuccess(true);
      }, 3000);
    } else {
      setIsAddPost(!isAddPost);
    }

    //need to write a code for editPost
  };

  //form filter
  const dataFilter = () => {
    let filteredData = [...locationData];
    // Apply price filter
    if (form.priceUp) {
      filteredData = filteredData.sort((el1, el2) =>
        el2.price.localeCompare(el1.price, undefined, { numeric: true })
      );
    } else {
      filteredData = filteredData.sort((el1, el2) =>
        el1.price.localeCompare(el2.price, undefined, { numeric: true })
      );
    }

    // Apply food per person filter
    if (form.eachItems) {
      filteredData = filteredData.filter((items) => !items.food_per_person);
    } else {
      filteredData = filteredData.filter((items) => items.food_per_person);
    }

    // Apply vegetarian filter
    if (form.veg) {
      filteredData = filteredData.filter((items) => items.vegetarian);
    } else {
      filteredData = filteredData.filter((items) => !items.vegetarian);
    }

    setFilterData(filteredData);
  };

  return (
    <>
      <Filter
        setForm={setForm}
        form={form}
        dataFilter={dataFilter}
        locationData={locationData || []}
        setFilterData={setFilterData}
      />
      <WhatsInYourMind />
      <ParentOfCards locationId={locationId} filterData={filterData || []} />
      {orderVisible ? (
        <YourOrderParent
          orderList={orderList}
          handleSideSection={handleSideSection}
        />
      ) : null}
      {postVisible ? (
        <YourListParent
          handleEditPost={handleEditPost}
          showPostData={showPostData}
          setPostData={setPostData}
          setIsAddPost={setIsAddPost}
          isAddPost={isAddPost}
          handleSideSection={handleSideSection}
        />
      ) : null}
      {isAddPost ? (
        <div className="addPostOutter">
          <div className="addPost__inner">
            <div className="addPost__head">
              <h1 className="modal-title ">
                {sendMsg == "from add post" ? "Add Post" : "Edit Post"}
              </h1>
              <button
                type="button"
                className="addPost__close"
                onClick={() => setIsAddPost(!isAddPost)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <AddPostParent
              locationList={locationList || []}
              setPostData={setPostData}
              locationId={locationId}
              showPostData={showPostData}
              editUser={editUser}
              message={sendMsg}
              isAddPost={isAddPost}
              setIsAddPost={setIsAddPost}
              handleSubmit={handleSubmit}
              isLoader={isLoader}
              postSuccess={postSuccess}
              setPostSuccess={setPostSuccess}
              setIsLoader={setIsLoader}
              setPostVisible={setPostVisible}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
