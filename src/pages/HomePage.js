import React, { useRef } from "react";
import "../css/home.css";
import Layout from "../Components/Layouts/Layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import meg from "../images/megaleio2020.jpg";
import rw from "../images/robo war20.jpg";
import rs from "../images/robo soccer.jpg"
function HomePage() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          pinSpacer: true,
          start: "left left", // Adjusted syntax
          end: "+=2500",
          scrub: 1,
        },
      });

      timeline.addLabel("card1");
      timeline.to(".card-1", {
        xPercent: 0,
        opacity: 1,
      });

      timeline.from(".card-2", {
        xPercent: 75,
        opacity: 0,
        duration: 2,
        stagger: 1,
      });

      timeline.addLabel("card11");
      timeline.to(".card-11", {
        xPercent: 0,
        opacity: 1,
      });

      timeline.from(".card-22", {
        xPercent: -75,
        opacity: 0,
        duration: 2,
        stagger: 1,
      });

      timeline.addLabel("card2");

      timeline.to(
        ".card-1",
        {
          scale: 1.01,
          xPercent: -0.5,
          opacity: 0.5,
        },
        "-=0.3"
      );

      timeline.to(".card-2", {
        xPercent: 0,
        opacity: 1,
      });

      timeline.from(".card-3", {
        xPercent: 75,
        opacity: 0,
        duration: 2,
        stagger: 1,
      });

      timeline.addLabel("card22");

      timeline.to(
        ".card-11",
        {
          scale: 1.01,
          xPercent: 0.5,
          opacity: 0.5,
        },
        "-=0.3"
      );

      timeline.to(".card-22", {
        xPercent: 0,
        opacity: 1,
      });

      timeline.from(".card-33", {
        xPercent: -75,
        opacity: 0,
        duration: 2,
        stagger: 1,
      });

      timeline.addLabel("card3");

      timeline.to(
        ".card-2",
        {
          scale: 1,
          xPercent: -0.4,
          opacity: 0.6,
        },
        "-=0.3"
      );

      timeline.to(".card-3", {
        xPercent: 0,
        opacity: 1,
      });

      timeline.to(".card-3", {});

      timeline.addLabel("card33");

      timeline.to(
        ".card-22",
        {
          scale: 1,
          xPercent: 0.4,
          opacity: 0.6,
        },
        "-=0.3"
      );

      timeline.to(".card-33", {
        xPercent: 0,
        opacity: 1,
      });

      timeline.to(".card-33", {});
    },
    { scope: container }
  );

  return (
    <Layout>
      <section className="w-screen h-screen bg-white"></section>
      <section className="container w-screen h-screen" ref={container}>
        <div className="main">
          <div className="img-cards">
            <div className="img-card card-1">
              <img className="img1" src={meg} alt="alt" />
            </div>
            <div className="img-card card-2">
              <img className="img1" src={meg} alt="alt" height={'100%'}/>
            </div>
            <div className="img-card card-3">
              <img className="img1" src={meg} alt="alt" />
            </div>
            {/* <!-- <div className="card card-4"><h2>04</h2></div> --> */}
          </div>
          <div className="content-cards">
            <div className="content-card card-11 text-black">
              <h1>MEGALEIO 2020</h1>
              <p>
                The third installment of Megaleio held in 2020 was a great
                success. It ended with the discovery of new champions of coding,
                testing, construction and other Engineering related fields.
                Everyone participating in the event cannot win the events but
                everyone got some lifelong valuable experience.
              </p>
            </div>
            <div className="content-card card-22 text-black">
              <h1>MEGALEIO 2020</h1>
              <p>
                The third installment of Megaleio held in 2020 was a great
                success. It ended with the discovery of new champions of coding,
                testing, construction and other Engineering related fields.
                Everyone participating in the event cannot win the events but
                everyone got some lifelong valuable experience.
              </p>
            </div>
            <div className="content-card card-33 text-black">
              <h1>MEGALEIO 2020</h1>
              <p>
                The third installment of Megaleio held in 2020 was a great
                success. It ended with the discovery of new champions of coding,
                testing, construction and other Engineering related fields.
                Everyone participating in the event cannot win the events but
                everyone got some lifelong valuable experience.
              </p>
            </div>
            {/* <!-- <div className="card card-44"><h2>04</h2></div> --> */}
          </div>
        </div>
      </section>
      <section className="w-screen h-screen bg-white"></section>
    </Layout>
  );
}

export default HomePage;
