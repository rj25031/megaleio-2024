import React, { useEffect, useState, useRef } from "react";
import Layout from "../Components/Layouts/Layout";
import "./../css/schedule.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { scheduleData } from "../Data/Data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Schedule() {
  const [current, setCurrent] = useState(1);
  const scheduleDataRef = useRef([]);
  useEffect(() => {
    AOS.init();
    setCurrent(1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      scheduleDataRef.current.forEach((divRef, index) => {
        if (divRef && divRef.offsetTop <= scrollPosition) {
          setCurrent(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleListItemClick = (index) => {
    const elementId = `c${index + 1}`; // Generating the corresponding element ID
    const element = document.getElementById(elementId);
    const handleStickyPosition = () => {
      // Loop through the scheduleDataRef
      scheduleDataRef.current.forEach((divRef, index) => {
        // Check if the index of the selected list item is less than the current index
        if (index + 1 < current) {
          // Remove the sticky position from the corresponding card element
          divRef.classList.add("relative");
          setTimeout(() => {
            divRef.classList.remove("relative");
          }, 50);
        }
      });
    };
    handleStickyPosition();

    if (element) {
      setCurrent(index + 1);
      // Scroll smoothly to the selected element with an adjusted position
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop, // Adjust the scroll position as needed
      });
    }
    // AOS.refresh();
  };

  const aniRef = useRef(null);

  const handleHoverIn = () => {
    aniRef.current = gsap.fromTo(".centering", { x: "-70%" }, { x: "0%" });
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
      gsap.to(".centering", { x: "-70%", duration: 2 });
    },
    { scope: container }
  );

  return (
    <Layout>
      {
        <div className="timeline-container relative" ref={container}>
          <div
            className="centering fixed p-3 pr-10 rounded-r-3xl text-white font-bold top-32 z-50 blur-background"
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
          >
            <p className="text-3xl sm:text-xl">DAY 1</p>
            <ul className="centering">
              {/* Loop through scheduleData to render the timeline */}
              {scheduleData.map(
                (tl, index) =>
                  tl.day === 1 && (
                    <li
                      key={index}
                      onClick={() => handleListItemClick(index)}
                      className={
                        current === index + 1
                          ? "m-0 cursor-pointer h-6 sm:h-4 animated-paragraph current"
                          : "m-0 cursor-pointer h-6 sm:h-4 animated-paragraph "
                      }
                    >
                      <p className="mt-1">{tl.time}</p>
                    </li>
                  )
              )}
            </ul>
            <p className="text-3xl sm:text-xl">DAY 2</p>
            <ul className="centering">
              {/* Loop through scheduleData to render the timeline */}
              {scheduleData.map(
                (tl, index) =>
                  tl.day === 2 && (
                    <li
                      key={index}
                      onClick={() => handleListItemClick(index)}
                      className={
                        current === index + 1
                          ? "m-0 cursor-pointer h-6 sm:h-4 animated-paragraph current"
                          : "m-0 cursor-pointer h-6 sm:h-4 animated-paragraph "
                      }
                    >
                      <p className="mt-1">{tl.time}</p>
                    </li>
                  )
              )}
            </ul>
            <div className=" relative">
            <h1 className="sch">SCHEDULE</h1>
          </div>
          </div>
        </div>
      }
      <div className="flex flex-col">
        {scheduleData.map((tl, index) => {
          return (
            <div
              key={index}
              id={`c${tl.id}`}
              className="card"
              ref={(el) => (scheduleDataRef.current[index] = el)}
            >
              <div className="inauguration event">
                <p data-aos="fade-up" className="text-5xl sm:text-3xl mb-3">
                  DAY : {tl.day}
                </p>
                <h1 data-aos="fade-up" className="text-9xl sm:text-5xl mb-3">
                  {tl.title.toUpperCase()}
                </h1>
                <h1 data-aos="fade-up" className="text-4xl sm:text-3xl mb-3">
                  {tl.time}
                </h1>
                <h3 data-aos="fade-up" className="text-4xl sm:text-3xl mb-3">
                  {tl.place.toUpperCase()}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Schedule;
