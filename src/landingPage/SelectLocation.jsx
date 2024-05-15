import React from "react";

const SelectLocation = ({locationList,handleSelectLocation,locationId}) => {
  return (
    <>
      <select
        name="location"
        id="locationSearch"
        placeholder="Location"
        className="location__input"
        onChange={(e) => handleSelectLocation(e)}
        value={locationId}
      >
        {locationList?.map((location, index) => {
          return (
            <option className="location__option"
              value={location}
              key={index}>
              {location}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectLocation;
