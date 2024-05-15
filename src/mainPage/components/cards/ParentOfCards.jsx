import React, { useState } from "react";
import Card from "../cards/Card";
import Footer from "../../header&footer/Footer";
const ParentOfCards = ({ filterData }) => {
  return (
    <>
      <div className="leftRightMar mb-4 ">
        <section>
          <p className="popFont-big-gray">{filterData.length} results</p>
          <h4 className="card-title-text">Available dishes near you</h4>
        </section>
        <section className="parent-card-section gap-5 mb-4">
          <Card data={filterData} />
        </section>
      </div>
    </>
  );
};

export default ParentOfCards;
