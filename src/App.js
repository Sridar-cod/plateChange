// import "bootstrap/dist/css/bootstrap.css";
// import "./App.css";
// import LandingPageParent from "./landingPage/LandingPageParent";
// import MainPageParent from "./mainPage/MainPageParent";
// import { useState } from "react";
// import data from "./data/mainCard.json";
// import addPostData from "./data/addPostData.json";
// import { Route, Routes } from "react-router-dom";
// function App() {
//   const [postData, setPostData] = useState(addPostData.postData);
//   const [locationId, setLocationId] = useState("chennai");
//   let locationList = []

//   if (data && typeof data === 'object') {
//     locationList = Object.keys(data.location);
//    }

//   const handleSelectLocation = (e) => {
//     setLocationId(e.target.value);
//   };
//   const userData = data.location
//   return (
//   <>

//     <Routes>
//       <Route
//         path="/"
//         element={
//           <LandingPageParent
//             handleSelectLocation={handleSelectLocation}
//             locationList={locationList || []}
//             locationId={locationId}
//           />
//         }
//       />
//       <Route
//         path="/home/:id/*"
//         element={
//           <MainPageParent
//             handleSelectLocation={handleSelectLocation}
//             locationList={locationList || []}
//             userData={ userData  ||[]}
//             locationId={locationId}
//             showPostData={postData || []}
//             setPostData={setPostData}
//           />
//         }
//       />
//       </Routes>
//       </>
//   );
// }

// export default App;


import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import LandingPageParent from "./landingPage/LandingPageParent";
const MainPageParent = lazy(() => import('./mainPage/MainPageParent'));

function App() {
  const [postData, setPostData] = useState([]);
  const [locationId, setLocationId] = useState("chennai");
  const [data, setData] = useState(null);
  const [addPostData, setAddPostData] = useState(null);

  // Lazy load JSON data
  useEffect(() => {
    const fetchData = async () => {
      const mainCardData = await import('./data/mainCard.json');
      const postData = await import('./data/addPostData.json');
      setData(mainCardData.default);
      setAddPostData(postData.default.postData);
    };
    fetchData();
  }, []);

  let locationList = [];

  if (data && typeof data === 'object') {
    locationList = Object.keys(data.location);
  }

  const handleSelectLocation = (e) => {
    setLocationId(e.target.value);
  };

  const userData = data?.location || {};

  return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
  );
}

export default App;
