import { Link } from "react-router-dom";
import SelectLocation from "./SelectLocation";

const Location = ({ locationList, locationId, handleSelectLocation }) => {
  return (
    <header className="header-location">
      <section className="section-location">
        {/* <details> */}
        <img
          src="assets/logo.png"
          alt=""
          className="logo-img"
          width={"200px"}
        />
        <h1 className="location-p-inter">
          Welcome to Our Food Sharing Community!
        </h1>
        <div className="location d-flex">
          <div className="location__span">
            <SelectLocation
              handleSelectLocation={handleSelectLocation}
              locationList={locationList}
              locationId={locationId}
            />
            <svg
              width="20px"
              className="location__location-icon ms-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
            </svg>
          </div>
          <Link to={`/home/${locationId}`}>
            <button className="location__button">Find Food</button>
          </Link>
        </div>
        {/* </details> */}
      </section>
    </header>
  );
};

export default Location;
