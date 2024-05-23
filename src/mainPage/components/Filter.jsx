import React, { useEffect, useState } from "react";
import "./../../mainPage/mainPage.css";

const Filter = ({ form, setForm, dataFilter, locationData,setFilterData }) => {

  const [veg, setVeg] = useState(false)
  const [price, setPrice] = useState(false)
  
  const handleFilterInput = (key) => {
    setForm((prev) => {
      let updatedForm = { ...prev, [key]: !prev[key] };
      if (key === "priceUp" && updatedForm.priceUp) {
        updatedForm.priceDown = false;
      } else if (key === "priceDown" && updatedForm.priceDown) {
        updatedForm.priceUp = false;
      } else if (key === "veg" && updatedForm.veg) {
        updatedForm.nonVeg = false;
      } else if (key === "nonVeg" && updatedForm.nonVeg) {
        updatedForm.veg = false;
      } else if (key === "eachPerson" && updatedForm.eachPerson) {
        updatedForm.eachItems = false;
      } else if (key === "eachItems" && updatedForm.eachItems) {
        updatedForm.eachPerson = false;
      }
      return updatedForm;
    });
  };
  const toggleFilter = (msg) => {
    if (msg === 'veg') {
      setVeg((prevVeg) => !prevVeg);
    }
  
    if (msg === 'price') {
      setPrice((prevPrice) => !prevPrice);
    }
  };
  
  const handleFilterSep = () => {
    let filteredData = [...locationData];
  
    if (veg) {
      filteredData = filteredData.filter((item) => item.vegetarian === true);
    }
  
    if (price) {
      filteredData = filteredData.sort((el1, el2) =>
        el1.price.localeCompare(el2.price, undefined, { numeric: true })
      );
    }
  
    setFilterData(filteredData);
  };
  
  useEffect(() => {
    handleFilterSep();
  }, [veg, price]);

  return (
    <>
      <div className="filter-outter d-flex gap-4 leftRightMar ">
        <div
          className="filter-outter__filter filter-com-box popFont-small"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <img src="/assets/filter-icon.svg" alt="" width={"20px"} />
          Filter
        </div>
        <div
          className="filter-outter__veg filter-com-box popFont-small"
          // style={
          //   filters.veg ? { backgroundColor: "#016c13", color: "white" } : {}
          // }
          style={
            veg ? { backgroundColor: "#016c13", color: "white" } : {}
          }
          onClick={() => {
            toggleFilter("veg");
          }}
        >
          Pure Veg
        </div>
        <div
          className="filter-outter__price filter-com-box popFont-small"
          // style={
          //   filters.price ? { backgroundColor: "#016c13", color: "white" } : {}
          // }
          style={
            price ? { backgroundColor: "#016c13", color: "white" } : {}
          }
          onClick={() => {
            toggleFilter("price");
          }}
        >
          Price
          <svg
            width={"20px"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V288H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H448V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 109.3V224H192 128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96zM128 192h64V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192zM448 320H384V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320z" />
          </svg>
          {/* <img src="/assets/filter-price-icon.svg" alt="" width={"20px"} /> */}
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Filter
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5 className="filter-head">Price :</h5>
                <div className="d-flex justify-content-around mb-4 gap-2">
                  <div className="d-flex  justify-content-around">
                    <label
                      htmlFor="priceUp"
                      className="filter-lable-font ms-3 mt-0"
                    >
                      price Up
                    </label>
                    <input
                      type="radio"
                      id="priceUp"
                      name="price"
                      className="filter-input-ratio"
                      onChange={() => handleFilterInput("priceUp")}
                      checked={form.priceUp}
                    />
                  </div>
                  <div className="d-flex">
                    <label htmlFor="priceDown" className="filter-lable-font">
                      price Down
                    </label>
                    <input
                      type="radio"
                      id="priceDown"
                      name="price"
                      className="filter-input-ratio"
                      onChange={() => handleFilterInput("priceDown")}
                      checked={form.priceDown}
                    />
                  </div>
                </div>
                <h5 className="filter-head">Category :</h5>
                <div className="d-flex justify-content-around mb-3">
                  <div className="d-flex">
                    <label htmlFor="veg" className="filter-lable-font">
                      Veg
                    </label>
                    <input
                      type="radio"
                      id="veg"
                      name="vegetarian"
                      className="filter-input-ratio"
                      onChange={() => handleFilterInput("veg")}
                      checked={form.veg}
                    />
                  </div>
                  <div className="d-flex">
                    <label htmlFor="nonVeg" className="filter-lable-font">
                      Non Veg
                    </label>
                    <input
                      type="radio"
                      id="nonVeg"
                      className="filter-input-ratio"
                      name="Vegitaria"
                      onChange={() => handleFilterInput("nonVeg")}
                      checked={form.nonVeg}
                    />
                  </div>
                </div>
                <h5 className="filter-head">For Each :</h5>
                <div className="">
                  <div className="d-flex justify-content-around">
                    <div className="d-flex">
                      <label htmlFor="person" className="filter-lable-font">
                         Person
                      </label>
                      <input
                        type="radio"
                        id="person"
                        name="catogery"
                        className="filter-input-ratio"
                        onChange={() => handleFilterInput("eachPerson")}
                        checked={form.eachPerson}
                      />
                    </div>
                    <div className="d-flex">
                      <label htmlFor="" className="filter-lable-font">
                         Items
                      </label>
                      <input
                        type="radio"
                        name="catogery"
                        className="filter-input-ratio"
                        onChange={() => handleFilterInput("eachItems")}
                        checked={form.eachItems}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="filter-apply-button"
                  data-dismiss="modal"
                  onClick={dataFilter}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
