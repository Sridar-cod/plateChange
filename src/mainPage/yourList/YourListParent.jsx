import React, { useEffect, useState } from "react";
import CardOfYourList from "./CardOfYourList";
import "./yourList.css";
// import addPostData from './../../data/addPostData.json'

const YourListParent = ({ showPostData,setPostData,handleEditPost,setIsAddPost,isAddPost }) => {
  // const [userCard,setUserCard]=useState([])
  // useEffect(() => {
  //   setUserCard(addPostData.postData)
  // },[])
  // console.log(addPostData,'checking3')

  // const dummyData = [
  //   {
  //     id: 1,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [

        
  //     ],
  //   },
  //   {
  //     id: 3,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     postDetails: {
  //       img: "assets/image 13 1.svg",
  //       name: "chapathi",
  //       postTime: 4,
  //     },

  //     buyerRequist: [
  //       {
  //         id: 1,
  //         buyerName: "ramkumar",
  //       },
  //     ],
  //   }
  // ];
  return (
    <>
      <div className="yourListParent d-flex align-items-center b1 flex-column mb-3">
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
