import React, { useState, useEffect } from "react";
import Layout from "../Components/Layouts/Layout";
import "../css/event.css";
import { event_list } from "../Data/Data";

const EventPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);

  const timeRunning = 3000;
  let timeAutoNext = 14000;

  let runTimeOut;
  let carouselDom;

  useEffect(() => {
    setCarouselItems(event_list);
    setThumbnails(event_list);
    setThumbnails((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const showSlider = (type) => {
    carouselDom = document.getElementsByClassName("carousel")[0];
    if (type === "next") {
      setCarouselItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      setThumbnails((prevItems) => [...prevItems.slice(1), prevItems[0]]);

      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      carouselDom.classList.add("next");
    } else {
      setCarouselItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, prevItems.length - 1),
      ]);
      setThumbnails((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, prevItems.length - 1),
      ]);

      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + carouselItems.length) % carouselItems.length
      );
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);
  };

  function handleClick(n) {
    if (n >= 0) {
      showSlider("next");
      handleClick(n - 1);
    }
  }

  return (
    <Layout>
      <div className="carousel">
        {/* <div className={`carousel ${currentIndex > 0 ? 'next' : ''}`}> */}
        <div className="list">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`item ${index === currentIndex ? "active" : ""}`}
            >
              <img src={item.image} alt={`Slide ${index}`} />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.time}</div>
                <div className="des">{item.desc}</div>
                <div className="buttons">
                  <button>RULE BOOK</button>
                  <button
                    onClick={() => {
                      window.open(item.reg_link, "_blank");
                    }}
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className={`item ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                console.log(index);
                handleClick(index);
              }}
            >
              <img src={thumbnail.image} alt={`Thumbnail ${index}`} />
              <div className="content">
                <div className="title">{thumbnail.title}</div>
                <div className="description">{thumbnail.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={() => showSlider("prev")}>
            {/* &lt; */}
            <img className="prev-img" src="Assets\Asset 1.png" alt="" />
          </button>
          <button id="next" onClick={() => showSlider("next")}>
            {/* &gt; */}
            <img className="next-img" src="Assets\Asset 1.png" alt="" />
          </button>
        </div>

        <div className="time"></div>
      </div>
    </Layout>
  );
};
export default EventPage;
