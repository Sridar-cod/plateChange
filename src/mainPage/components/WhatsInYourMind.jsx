import React, { useState } from "react";
const WhatsInYourMind = () => {
  const [slideCount, setSlideCount] = useState({
    startInt: 0,
    endInt: 5,
  });
  const content = [
    {
      id: 1,
      text: "Idly",
      img: "/assets/image 8 1.svg",
    },
    {
      id: 2,
      text: "Dosa",
      img: "/assets/image 9 1.svg",
    },
    {
      id: 3,
      text: "Pongal",
      img: "/assets/image 10 1.svg",
    },
    {
      id: 4,
      text: "Poori",
      img: "/assets/image 11 1.svg",
    },
    {
      id: 5,
      text: "Chapathi",
      img: "/assets/image 12 1.svg",
    },
    {
      id: 6,
      text: "Meals",
      img: "/assets/image 13 1.svg",
    },
    {
      id: 7,
      text: "Sambar Rice",
      img: "/assets/image 9 1.svg",
    },
    {
      id: 8,
      text: "Curd Rice",
      img: "/assets/image 10 1.svg",
    },
    {
      id: 9,
      text: "Porata",
      img: "/assets/image 8 1.svg",
    },
    {
      id: 10,
      text: "Vada",
      img: "/assets/image 13 1.svg",
    },
  ];
  const handleSlide = (label) => {
    if (label === "moveRight" && slideCount.endInt <= content.length - 1) {
      setSlideCount((prevSlideCount) => ({
        ...prevSlideCount,
        startInt: prevSlideCount.startInt + 1,
        endInt: prevSlideCount.endInt + 1,
      }));
    } else if (label === "moveLeft" && slideCount.startInt >= 1) {
      setSlideCount((prevState) => ({
        ...prevState,
        startInt: prevState.startInt - 1,
        endInt: prevState.endInt - 1,
      }));
    }
  };
  
  

  return (
    <>
      <main className="leftRightMar ">
        <section className="d-flex justify-content-between whatsInYourMind-heading">
          <h3 className="popForn-big">What’s in your mind?</h3>
          <div className="whatsInYourMind-heading__icon-outter mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={'25px'} onClick={() => handleSlide("moveLeft")} viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
            <svg onClick={() => handleSlide("moveRight")} width={'25px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </div>
        </section>
        <section className="d-flex whatsInYourMind mt-3 mb-3">
          {content
            .slice(slideCount.startInt, slideCount.endInt)
            .map((items) => {
              return (
                <div
                  className="whatsInYourMind__card d-flex flex-column"
                  key={items.id}
                >
                  <img
                    src={items.img}
                    alt=""
                    width={"150px"}
                    className="whatsInYourMind__img "
                  />
                  <p className="whatsInYourMind__text">{items.text}</p>
                </div>
              );
            })}
        </section>
      </main>
    </>
  );
};

export default WhatsInYourMind;
