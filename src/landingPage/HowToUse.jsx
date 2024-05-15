import React from "react";

// import card4 from './../assets/how-it-work-step-4'
// import card5 from './../assets/how-it-work-step-5'
// import card6 from './../assets/how-it-work-step-6'
const HowToUse = () => {
  return (
    <section className="p-4">
      {/* <article>
        <h1 className="location-p-inter">
          Welcome to Our Food Sharing Community!
        </h1>
      </article> */}

      <section className="top-card-out d-flex justify-content-center align-items-center">
        <article className="top-card-inner">
          <h2>Buy and Sell Food with Your Homemates and Neighbors</h2>
          <p className="" style={{ textAlign: "center" }}>
            Are you tired of impersonal food delivery apps that offer the same
            restaurants and menus? Our platform offers a unique and
            community-driven approach to buying and selling homemade food with
            your homemates and neighbors
          </p>
        </article>
      </section>

      <section className="p-4 mt-5">
        <h1 className="location-p-inter landing-heading-text">
          Sell Your Extra Food
        </h1>
        <div className="row w-100 mt-2">
          <h5 style={{ textAlign: "center" }} className="mb-5">
            Have leftovers from last night's dinner or made a bit too much of
            your favorite dish? Why not sell it to your homemates and neighbors
            through our website?
          </h5>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex flex-column col-xxl-4 sell-card ">
            <img
              src="assets/landing-img-1.png"
              alt=""
              className="howToUse-img"
              // width={"100%"}
              // height={"50%"}
            />
            <h2 style={{ textAlign: "center" }}>Step-1</h2>
            <p className="location-p-inter-ver2">
              click the "Add Post" button at the top of the page. Provide
              details such as the dish name and how long you have the food
              (e.g., expiry date, quantity).
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex flex-column col-xxl-4 sell-card ">
            <img
              src="assets/how-to-use-step-1.svg"
              alt=""
              className="howToUse-img"
              // width={"100%"}
              // height={"50%"}
            />
            <h2 style={{ textAlign: "center" }}>Step-2</h2>
            <p className="location-p-inter-ver2">
            Interested individuals can easily reach out to you via WhatsApp or phone call to arrange for the pickup or delivery of the food and they can contact you at their convenience to discuss their preferences and schedule.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column sell-card">
            <img
              src="assets/landing-img-3.png"
              alt=""
              className="howToUse-img"
              // width={"100%"}
              // height={"50%"}
            />{" "}
            <h2 style={{ textAlign: "center" }}>Step-3</h2>
            <p className="location-p-inter-ver2">
              Once the order is confirmed, prepare the food with care After
              preparation, deliver the food to the buyer's location, ensuring a
              seamless and enjoyable experience for them.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <h1 className="location-p-inter landing-heading-text">
          Buy Food from Your Homemates and Neighbors
        </h1>{" "}
        <div className="row w-100">
          <h5 style={{ textAlign: "center" }} className="mb-5 ">
            Craving something homemade but don't feel like cooking? Browse
            through listings from your nearby homemates and neighbors.
          </h5>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  col-xxl-4 d-flex flex-column sell-card">
            <img
              src="assets/landing-img-4.png"
              alt=""
              className="howToUse-img"
            />
            <h2 style={{ textAlign: "center" }}>Step-1</h2>
            <p className="location-p-inter-ver2">
              Begin by selecting your location to view food options available in
              your area and browse through the food selection and use filters to
              refine your choices.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  col-xxl-4 d-flex flex-column sell-card">
            <img
              src="assets/landing-img-5.png"
              alt=""
              className="howToUse-img"
            />
            <h2 style={{ textAlign: "center" }}>Step-2</h2>
            <p className="location-p-inter-ver2">
              Once you've made your selection, proceed to the payment section to
              complete your order
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  col-xxl-4 d-flex flex-column sell-card">
            <img
              src="assets/landing-img-6.png"
              alt=""
              className="howToUse-img"
            />
            <h2 style={{ textAlign: "center" }}>Step-3</h2>
            <p className="location-p-inter-ver2">
              After placing your order, you can view the details of your order
              in the order list at the top of the page.
              {/* Track the status of your order and await delivery! */}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HowToUse;
