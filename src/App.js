import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { lazy, Suspense, useState } from "react";
import LandingPageParent from "./landingPage/LandingPageParent";
import data from "./data/mainCard.json";
import addPostData from "./data/addPostData.json";
import { Route, Routes } from "react-router-dom";
const MainPageParent = lazy(() => import("./mainPage/MainPageParent"));

function App() {
  const [postData, setPostData] = useState(addPostData.postData);
  const [locationId, setLocationId] = useState("chennai");
  let locationList = [];

  if (data && typeof data === "object") {
    locationList = Object.keys(data.location);
  }

  const handleSelectLocation = (e) => {
    setLocationId(e.target.value);
  };
  const userData = data.location;
  return (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <h1>Loading...</h1>
        </div>
      }
    >
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
                userData={userData || []}
                locationId={locationId}
                showPostData={postData || []}
                setPostData={setPostData}
              />
            }
          />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
