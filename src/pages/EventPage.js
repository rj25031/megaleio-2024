import React, { useState, useEffect,useRef } from "react";
import Layout from "../Components/Layouts/Layout";
import "../css/event.css";
import { event_list } from "../Data/Data";
import btnImg from '../images/Assets/Asset 1.webp';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const EventPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);


  const aniRef = useRef(null);

  const handleHoverIn = () => {
    aniRef.current = gsap.fromTo(".list-container", { x: "-70%" }, { x: "0%" });
    aniRef.current.play();
  };

  const handleHoverOut = () => {
    if (aniRef.current) {
      aniRef.current.reverse();
    }
  };
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".list-container", { x: "-70%", duration: 2 });
    },
    { scope: container }
  );





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

  const handleClick = (n) => {
    if (n >= 0) {
      showSlider("next");
      handleClick(n - 1);
    }
  };

  const handleEventClick = (n) => {
    if (n < currentIndex) {
      showSlider("prev");
      if (n < currentIndex - 1) {
        handleEventClick(n + 1); // Recursively call the function without delay
      }
    } else if (n > currentIndex) {
      showSlider("next");
      if (n > currentIndex + 1) {
        handleEventClick(n - 1); // Recursively call the function without delay
      }
    } else if (n === currentIndex) {
      console.log('at event');
    }
    setSelectedEvent(n); // Update selectedEvent state
    console.log(n);
    console.log(currentIndex);
  };
  
  return (
    <Layout>
      <div ref={container} className="carousel">
        <ol className=" list-container list-decimal w-56 sm:w-40 absolute z-50 top-52 left-0"
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
        >
          {event_list.map((event, index) => (
            <li
              key={index}
              onClick={() => handleEventClick(index)}
              className={ index === selectedEvent ? "selected" : ""}
            >
              {event.title}
            </li>
          ))}
          <div className="event-lst">
            <h1>
              EVENT
            </h1>
          </div>
        </ol>
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
              onClick={() => handleClick(index)}
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
            <img className="prev-img" src={btnImg} alt="" />
          </button>
          <button id="next" onClick={() => showSlider("next")}>
            <img className="next-img" src={btnImg} alt="" />
          </button>
        </div>

        <div className="time"></div>
      </div>
    </Layout>
  );
};

export default EventPage;
