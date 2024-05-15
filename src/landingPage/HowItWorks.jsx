import React from "react";
import Footer from "../mainPage/header&footer/Footer";
const HowItWorks = () => {
  return (
    <>
      <main className="howItWorkParent ">
        <h1 className="landing-heading-text" style={{ textAlign: "center" }}>
          How We're Different
        </h1>
        <div className="row w-100 ps-4 pe-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-xxl-6 d-flex justify-content-center">
            <img
              src="assets/how-it-work-1.svg"
              alt=""
              width={"400px"}
              height={"400px"}
              className=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-xxl-6">
            <h2
              className="landing-sub-heading-text"
              style={{ textAlign: "center" }}
            >
              Community-Centric:{" "}
            </h2>
            <p className="location-p-inter-ver2">
              We focus on building a community where neighbors can share
              homemade food, fostering a sense of belonging and trust that you
              won't find in traditional food delivery apps.
            </p>
          </div>
        </div>
        <div className="row w-100 ps-5 pe-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-xxl-6 d-flex justify-content-center d-flex justify-content-center howItWork__orderChangeRight">
            <img
              src="assets/how-it-work-2.svg"
              alt=""
              width={"400px"}
              height={"400px"}
              className=""
            />
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-xxl-6 d-flejustify-content-center howItWork__orderChangeLeft ">
            <h2
              className="landing-sub-heading-text"
              style={{ textAlign: "center" }}
            >
              Personalized Service:{" "}
            </h2>
            <p className="location-p-inter-ver2 b">
              Unlike large food delivery apps that offer a standard selection of
              restaurants, our platform allows you to buy and sell food with
              people you know, adding a personal touch to every transaction.
            </p>
          </div>
        </div>

        <div className="row w-100 ps-4 pe-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-xxl-6 d-flex justify-content-center">
            <img
              src="assets/landing-img-nego.png"
              alt=""
              width={"300px"}
              height={"300px"}
              className=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-xxl-6">
            <h2
              className="landing-sub-heading-text"
              style={{ textAlign: "center" }}
            >
              Negotiable Pricing:{" "}
            </h2>
            <p className="location-p-inter-ver2">
              {" "}
              On our platform, you can negotiate the price of homemade food with
              your neighbors, ensuring that you get the best deal possible and
              supporting a fair exchange between community members.
            </p>
          </div>
        </div>
        <div className="row w-100 ps-5 pe-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-xxl-6 d-flex justify-content-center d-flex justify-content-center howItWork__orderChangeRight">
            <img
              src="assets/landing-img-food-waste.avif"
              alt=""
              width={"400px"}
              height={"400px"}
              className=""
            />
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-xxl-6 d-flejustify-content-center howItWork__orderChangeLeft ">
            <h2
              className="landing-sub-heading-text"
              style={{ textAlign: "center" }}
            >
              Reduce Food Waste:{" "}
            </h2>
            <p className="location-p-inter-ver2 b">
              By buying and selling homemade food locally, you can help reduce
              food waste in your community, contributing to a more sustainable
              way of living.
            </p>
          </div>
        </div>

        <section className="m-4">
          <h1 className="landing-heading-text">How It Works</h1>
          <div className="row mt-4">
            <div className="col">
              <div className=" p-3 htw-card">
                <b>List Your Food:</b>
                <p>
                  If you have extra food to sell, simply list it on our website.
                  Provide details such as the type of food, quantity, price, and
                  pickup/delivery options.
                </p>
              </div>
            </div>
            <div className="col">
              <div className=" p-3 htw-card">
                <b>Find Food Near You:</b>
                <p>
                  Browse listings from your homemates and neighbors to find
                  homemade food that suits your taste. Contact the seller to
                  negotiate the price if needed.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <div className=" p-3 htw-card">
                <b>Negotiate and Purchase:</b>
                <p>
                  Since you're buying from people you know, you can negotiate
                  the price to get the best deal. Once you agree on a price,
                  arrange for pickup or delivery.
                </p>
              </div>
            </div>
            <div className="col">
              <div className=" p-3 htw-card">
                <b>Enjoy Homemade Goodness:</b>
                <p>
                  Receive your homemade food and enjoy a delicious meal made
                  with love and care by your homemates and neighbors.
                </p>
              </div>
            </div>
          </div>
          {/* <ul>
            <li>List Your Food: If you have extra food to sell, simply list it on our website. Provide details such as the type of food, quantity, price, and pickup/delivery options.</li>
            <li>Find Food Near You: Browse listings from your homemates and neighbors to find homemade food that suits your taste. Contact the seller to negotiate the price if needed.</li>
            <li>Negotiate and Purchase: Since you're buying from people you know, you can negotiate the price to get the best deal. Once you agree on a price, arrange for pickup or delivery.</li>
            <li>Enjoy Homemade Goodness: Receive your homemade food and enjoy a delicious meal made with love and care by your homemates and neighbors.</li> 
          </ul>*/}
        </section>
      </main>
      <div className="howItWork__footer">
        <Footer />
        <p className="howItWork__footer__copyRight">
          Plate Change Copyright 2024. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default HowItWorks;
