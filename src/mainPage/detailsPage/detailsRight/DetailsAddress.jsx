import React, { useState } from "react";

const DetailsAddress = ({ setChangeNext }) => {
  const [address, setAddress] = useState({
    house: "",
    street: "",
    area: "",
    city: "",
  });
  const [validity, setValidity] = useState({
    house: false,
    street: false,
    area: false,
    city: false,
  });

  function handleNext() {
    // if (!address.house || !address.street || !address.area || !address.city) {
    //   alert("Please fill in all fields");
    //   return;
    // }
    let isvaild = true;
    if (address.house.length === 0) {
      setValidity((pre) => {
        return {
          ...pre,
          house: true,
        };
      });
      isvaild = false;
    } else {
      setValidity((pre) => {
        return {
          ...pre,
          house: false,
        };
      });
    }
    if (address.area.length === 0) {
      setValidity((pre) => {
        return {
          ...pre,
          area: true,
        };
      });
      isvaild = false;
    } else {
      setValidity((pre) => {
        return {
          ...pre,
          area: false,
        };
      });
    }
    if (address.city.length === 0) {
      setValidity((pre) => {
        return {
          ...pre,
          city: true,
        };
      });
      isvaild = false;
    } else {
      setValidity((pre) => {
        return {
          ...pre,
          city: false,
        };
      });
    }

    if (address.street.length === 0) {
      setValidity((pre) => {
        return {
          ...pre,
          street: true,
        };
      });
      isvaild = false;
    } else {
      setValidity((pre) => {
        return {
          ...pre,
          street: false,
        };
      });
    }
    if (isvaild) {
      setChangeNext((changeNext) => (changeNext = "payment"));
    }
  }
  const handleForm = (e, label) => {
    const value = e.target.value;
    setAddress((pre) => {
      return {
        ...pre,
        [label]: value,
      };
    });
  };
  return (
    <>
      <div className="detailsaddress-outter ">
        <h2>Address</h2>
        <div className="detailsAddress-inner ">
          <label htmlFor="house no" className="detailsAddress-lable">
            building name/house name
          </label>
          <input
            type="text"
            placeholder="b20/ram flats "
            className="detailsAddress-input"
            onChange={(e) => handleForm(e, "house")}
            value={address.house}
            style={validity.house ? { border: "2px solid red" } : {}}
          />
        </div>
        <div className="detailsAddress-inner">
          <label htmlFor="street" className="detailsAddress-lable">
            street
          </label>
          <input
            type="text"
            placeholder="kumar street"
            className="detailsAddress-input"
            onChange={(e) => handleForm(e, "street")}
            value={address.street}
            style={validity.street ? { border: "2px solid red" } : {}}
          />
        </div>
        <div className="detailsAddress-inner">
          <label htmlFor="area" className="detailsAddress-lable">
            area
          </label>
          <input
            type="text"
            placeholder="pazhavanthagal"
            className="detailsAddress-input"
            onChange={(e) => handleForm(e, "area")}
            value={address.area}
            style={validity.area ? { border: "2px solid red" } : {}}
          />
        </div>
        <div className="detailsAddress-inner">
          <label htmlFor="city" className="detailsAddress-lable">
            city
          </label>
          <input
            type="text"
            placeholder="chennai"
            className="detailsAddress-input"
            onChange={(e) => handleForm(e, "city")}
            value={address.city}
            style={validity.city ? { border: "2px solid red" } : {}}
          />
        </div>
        <div className="d-flex  justify-content-end mt-3">
          <button className="details-next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsAddress;
