import React, { useRef } from "react";
import { home_data } from "../Data/Data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../css/imgText.css";

function ImgText() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top", // Pin from the top of the container
          end: "+=3200", // End pinning after scrolling 3200px
          pin: true, // Pin the container
          pinSpacing: false, // Disable pin spacing to keep background fixed
          scrub: 1,
          markers: true,
        },
      });

      home_data.forEach((data, index) => {
        const cardIndex = index + 1;
        timeline.addLabel(`card${cardIndex}`);
        timeline.to(`.card-${cardIndex}`, {
          yPercent: 0,
          opacity: 1,
        });

        timeline.from(`.card-${cardIndex + 1}`, {
          yPercent: 75,
          opacity: 0,
          duration: 2,
          stagger: 1,
        });
        timeline.addLabel(`card${cardIndex}${cardIndex}`);
        timeline.to(`.card-${cardIndex}${cardIndex}`, {
          yPercent: 0,
          opacity: 1,
        });

        timeline.from(`.card-${cardIndex + 1}${cardIndex+1}`, {
          yPercent: -75,
          opacity: 0,
          duration: 2,
          stagger: 1,
        });
      });
    },
    { scope: container }
  );

  return (
    <section className="container" ref={container}>
      <div className="main">
        <div className="img-cards">
          {home_data.map((data, index) => {
            return (
              <div key={index} className={`img-card card-${index + 1}`}>
                <img className="img1" src={"Assets/final.webp"} alt="alt" />
              </div>
            );
          })}
        </div>
        <div className="content-cards">
          {home_data.map((data, index) => {
            return (
              <div
                key={index}
                className={`content-card card-${index + 1}${index + 1} text-black`}
              >
                <h1>MEGALEIO 2020</h1>
                <p>
                  The third installment of Megaleio held in 2020 was a great
                  success. It ended with the discovery of new champions of
                  coding, testing, construction and other Engineering related
                  fields. Everyone participating in the event cannot win the
                  events but everyone got some lifelong valuable experience.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ImgText;
