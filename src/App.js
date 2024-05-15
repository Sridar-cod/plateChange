import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import LandingPageParent from "./landingPage/LandingPageParent";
import MainPageParent from "./mainPage/MainPageParent";
import { useEffect, useState } from "react";
// import axios from "axios";
import data from "./data/mainCard.json";
import addPostData from "./data/addPostData.json";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  const [postData, setPostData] = useState(addPostData.postData);
  // useEffect(() => {
  //   const fetchData = () => {
  //     try {
  //       const response = data;
  //       localStorage.setItem("data", JSON.stringify(response.location));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   const fetchAddPostData = () => {
  //     try {
  //       const response = addPostData;
  //       localStorage.setItem("addPostData", JSON.stringify(response));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchAddPostData();
  //   fetchData();
  // }, []);

  // const userData = JSON.parse(localStorage.getItem("data"));
  // const PostData = JSON.parse(localStorage.getItem("addPostData"));
  // console.log(PostData, "1");
  const [locationId, setLocationId] = useState("" || "chennai");
  let locationList = []

  if (data && typeof data === 'object') {
    locationList = Object.keys(data.location);
   }
  
  const handleSelectLocation = (e) => {
    setLocationId(e.target.value);
  };
  const userData = data.location
  return (
  <>
    
    <Routes>
      <Route
        path="/"
        element={
          <LandingPageParent
            handleSelectLocation={handleSelectLocation}
            locationList={locationList || []}
            locationId={locationId}
          />
        }
      />
      <Route
        path="/home/:id/*"
        element={
          <MainPageParent
            handleSelectLocation={handleSelectLocation}
            locationList={locationList || []}
            userData={ userData  ||[]}
            locationId={locationId}
            showPostData={postData || []}
            setPostData={setPostData}
          />
        }
      />
      </Routes>
      </>
  );
}

export default App;
