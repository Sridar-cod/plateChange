import React from 'react'
import Location from './Location'
import HowToUse from './HowToUse'
import HowItWorks from './HowItWorks'
import EarningFromThis from './EarningFromThis'
import Footer from './../mainPage/header&footer/Footer'


import './landingPage.css'
const LandingPageParent = ({locationList,locationId,handleSelectLocation}) => {
  return (
    <>
      <Location
        handleSelectLocation={handleSelectLocation}
        locationId={locationId}
        locationList={locationList} />
      <HowToUse />
      <HowItWorks />
      {/* <EarningFromThis /> */}
    </>
  )
}

export default LandingPageParent