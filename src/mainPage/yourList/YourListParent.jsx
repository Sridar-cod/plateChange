import React, { useEffect, useState } from "react";
import CardOfYourList from "./CardOfYourList";
import "./yourList.css";
// import addPostData from './../../data/addPostData.json'

const YourListParent = ({
  showPostData,
  setPostData,
  handleEditPost,
  setIsAddPost,
  isAddPost,
}) => {
  return (
    <>
      <div className="yourListParent d-flex align-items-center b1 flex-column mb-3 ">
        <h2 className="yourListParent__title">Your Post List</h2>
        <CardOfYourList
          setIsAddPost={setIsAddPost}
          showPostData={showPostData}
          setPostData={setPostData}
          handleEditPost={handleEditPost}
          isAddPost={isAddPost}
        />
      </div>
    </>
  );
};

export default YourListParent;
