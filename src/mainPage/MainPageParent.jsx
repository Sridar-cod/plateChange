import React, { useEffect, useState } from "react";
import Navigation from "./header&footer/Navigation";
import Filter from "../mainPage/components/Filter";
import WhatInYourMind from "../mainPage/components/WhatsInYourMind";
import ParentOfCards from "./components/cards/ParentOfCards";
import AddPostParent from "../mainPage/addPost/AddPostParent";
import Footer from "./../mainPage/header&footer/Footer";
import DetailsParent from "./detailsPage/DetailsParent";
import YourOrderParent from "./yourOrder/YourOrderParent";
import YourListParent from "./yourList/YourListParent";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
const MainPageParent = ({
  userData,
  locationList,
  handleSelectLocation,
  locationId,
  showPostData,
  setPostData,
}) => {
  const [postVisible, setPostVisible] = useState(false);
  const [orderVisible, setOrderVisible] = useState(false);
  const [sendMsg, setSendMsg] = useState("from add post");
  const [isAddPost, setIsAddPost] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [isPlaceOrder, setIsPlaceOrder] = useState(false);

  const handleSideSection = (val) => {
    if (val === "post") {
      setOrderVisible(false);
      setPostVisible(!postVisible);
    } else {
      setPostVisible(false);
      setOrderVisible(!orderVisible);
    }
  };

  return (
    <>
      <div className="mainPageParent">
        <Navigation
          handleSideSection={handleSideSection}
          locationId={locationId}
          locationList={locationList}
          handleSelectLocation={handleSelectLocation}
          setSendMsg={setSendMsg}
          setIsAddPost={setIsAddPost}
          isAddPost={isAddPost}
        />

        <Routes>
          <Route>
            <Route
              index
              element={
                <Home
                  orderVisible={orderVisible}
                  postVisible={postVisible}
                  userData={userData}
                  showPostData={showPostData}
                  setPostData={setPostData}
                  locationList={locationList || []}
                  locationId={locationId}
                  setSendMsg={setSendMsg}
                  sendMsg={sendMsg}
                  isAddPost={isAddPost}
                  setIsAddPost={setIsAddPost}
                  orderList={orderList}
                  setPostVisible={setPostVisible}
                />
              }
            />
            {/* <Route
              path="post"
              element={
                <AddPostParent
                  locationList={locationList || []}
                  setPostData={setPostData}
                  locationId={locationId}
                  showPostData={showPostData}
                />
              }
            /> */}
            <Route
              path="details/:id"
              element={
                <DetailsParent
                  userData={userData}
                  locationId={locationId}
                  setOrderList={setOrderList}
                  isPlaceOrder={isPlaceOrder}
                  setIsPlaceOrder={setIsPlaceOrder}
                  setOrderVisible={setOrderVisible}
                />
              }
            />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default MainPageParent;
