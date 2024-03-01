import React, { useRef } from "react";
import "../css/home.css";
import Layout from "../Components/Layouts/Layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sponsor  from "../Components/Sponsor";
import Countdown from "../Components/Countdown";
import Content from "../Components/Content";
import ImgText from "../Components/ImgText";
function HomePage() {
  const cloudContainer = useRef(null);
 
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cloudContainer.current,
        pin: true,
        pinSpacer: false,
        start: "left left", // Adjusted syntax
        end: "+=2500",
        scrub: 1,
      },
    });

    timeline.to(
      ".corner-cloud-right",
      {
        xPercent: 100,
        duration: 3,
        stagger: 1,
        opacity: 0.5,
      },
      "a"
    );
    timeline.to(
      ".corner-cloud-left",
      {
        xPercent: -100,
        duration: 3,
        stagger: 1,
        opacity: 0.5,
      },
      "a"
    );
    timeline.to(
      ".mid-cloud",
      {
        scale: 3,
        opacity: 0,
        duration: 3,
        delay: 0.2,
        stagger: 1,
      },
      "a"
    );
    timeline.to(
      ".collage",
      {
        scale: 2,
        opacity: 0,
        duration: 3,
        delay: 2,
        stagger: 1,
      },
      "a"
    );

    timeline.to(
      ".round-cloud",
      {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        stagger: 1,
      },
      "b"
    );
    timeline.to(
      ".mid-cloud-1st",
      {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        delay: 0.4,
        stagger: 1,
      },
      "b"
    );
    timeline.to(
      ".darkest",
      {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        delay: 1.2,
        stagger: 1,
      },
      "b"
    );
    timeline.to(
      ".logo-img",
      {
        scale: 3,
        opacity: 0,
        duration: 2,
        delay: 4,
        stagger: 1,
      },
      "b"
    );
    timeline.to(
      ".mid-cloud-2nd",
      {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        delay: 5.5,
        stagger: 1,
      },
      "b"
    );
  });
  return (
    <Layout>
      <section
        ref={cloudContainer}
        className="main-section w-screen h-screen bg-black"
      >
        <div className="img-hero absolute top-0 left-96 z-0">
          <h1 className="harry absolute text-8xl w-screen font-bold text-center top-52 right-0">
            Save the Date's February 23rd-24th, 2024{" "}
          </h1>
          <img
            className="mid-cloud-2nd"
            src="Assets\clouds\mid-dark.png"
            alt="clouds"
          />
          <img className="logo-img" src="megaleio png.png" alt="megalio" />
        </div>
        <div className="collage harry absolute text-8xl w-screen font-bold text-center top-52 left-0">
          {/* <h1 className="mb-6">
            St. John College of Engineering and Management
          </h1> */}
          <img src="Assets\text.webp" alt="" />
          {/* <h3 className="mb-4"> Presents </h3> */}
        </div>
        <div className="clouds">
          <img
            className="light"
            src="Assets\clouds\lightining.gif"
            alt="light"
          />
          <img
            className="mid-cloud-1st"
            src="Assets\clouds\cloud1-dark.png"
            alt="clouds"
          />
          <img
            className="darkest"
            src="Assets\clouds\darkest.png"
            alt="clouds"
          />
          <img
            className="round-cloud"
            src="Assets\clouds\round-dark.png"
            alt="clouds"
          />
        </div>
        <div className="clouds">
          <img
            className="light"
            src="Assets\clouds\lightining.gif"
            alt="light"
          />
          <img
            className="mid-cloud"
            src="Assets\clouds\cloud4-dark.png"
            alt="clouds"
          />
          <img
            className="corner-cloud-right"
            src="Assets\clouds\cloud2-dark.png"
            alt="clouds"
          />
          <img
            className="corner-cloud-left "
            src="Assets\clouds\cloud2-dark.png"
            alt="clouds"
          />
        </div>
      </section>
      {/* <section className="w-screen h-screen text-black">
        <div className="h">
        <h1>hello</h1>
        </div>
      </section> */}
      <section className="poster-section">
        <div className="poster">
          <div className="poster-img">
          <img  src="Assets/final.webp" alt="" />
          </div>
          <div className="content">
            <h1 className="text-3xl font-bold mb-4">MEGALIEO 2024</h1>
         <p className="text-xl"> Welcome to Megaleio: A National Level Intercollegiate Technical Event where innovation meets excellence! Megaleio brings together the brightest minds from across the country to showcase their skills, knowledge, and creativity. With a plethora of competitions, Megaleio offers a platform for students to explore the latest trends in technology, engage in meaningful discussions, and network with industry experts. Join us on this exciting journey of learning, collaboration, and fun as we celebrate the spirit of innovation and technical prowess at Megaleio!"</p>
          </div>
        </div>
      </section>
      {/* <ImgText></ImgText> */}
      {/* <Content></Content> */}
      <Countdown></Countdown>
      <Sponsor></Sponsor>

    </Layout>
  );
}

export default HomePage;
