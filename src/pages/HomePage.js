import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import "../css/home.css";
import Layout from "../Components/Layouts/Layout";
import {clouds  } from '../Data/Data';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Sponsor  from "../Components/Sponsor";
import Countdown from "../Components/Countdown";
import img from "../images/horizons_train.png";
import img1 from "../images/horizons_village.png";

function HomePage() {
  const cloudContainer = useRef(null);
 
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cloudContainer.current,
        pin: true,
        pinSpacer: false,
        start: "left left", 
        end: "+=2500",
        scrub: 1,
      },
    });
    timeline.set(".logo-img",{
      scale:0.7,
    })
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
        <div className="img-hero absolute top-0 left-96 z-0 sm:left-0">
          <h1 className="sm:text-8xl text-yellow-500 harry absolute text-8xl w-screen font-bold text-center sm:top-52 top-80 right-0 sm:left-0">
            Save the Date : March 22nd-23rd, 2024{" "}
          </h1>
          <img
            className="mid-cloud-2nd sm:relative sm:left-0 sm:right-0 sm:top-44"
            src={clouds.midDark}
            alt="clouds"
            loading="eager"
          />
          <img className="logo-img sm:relative sm:top-44" src="megaleio png.png" loading="eager" alt="megalio" />
        </div>
        <div className="collage harry absolute text-8xl w-screen font-bold text-center top-52 left-0">
          <h1 className="mb-6 text-yellow-500 sm:text-5xl">
            St. John College of Engineering and Management
          </h1>
          <h3 className="mb-4 text-yellow-500"> Presents </h3>
        </div>
        <div className="clouds">
          <img
            className="light"
            src={clouds.light}
            alt="light"
            loading="eager"
          />
          <img
            className="mid-cloud-1st sm:relative sm:left-0 sm:right-0 sm:top-44"
            src={clouds.c1Dark}
            alt="clouds"
          />
          <img
            className="darkest sm:relative"
            src={clouds.darkest}
            alt="clouds"
            loading="eager"
          />
          <img
            className="round-cloud"
            src={clouds.round}
            alt="clouds"
          />
        </div>
        <div className="clouds">
          <img
            className="light"
            src={clouds.light}
            alt="light"
            loading="eager"
          />
          <img
            className="mid-cloud"
            src={clouds.c4Dark}
            alt="clouds"
            loading="eager"
          />
          <img
            className="corner-cloud-right"
            src={clouds.corner}
            alt="clouds"
            loading="eager"
          />
          <img
            className="corner-cloud-left "
            src={clouds.corner}
            alt="clouds"
            loading="eager"
          />
        </div>
      </section>
     
      <section className="poster-section">
        <div className="poster">
          <div className="poster-img">
          <img  src={clouds.poster} loading="eager" alt="" />
          </div>
          <div className="content">
            <h1 className="text-3xl font-bold mb-4 color-maroon">MEGALEIO 2024</h1>
         <p className="text-xl color-reddish"> Welcome to Megaleio: A National Level Intercollegiate Technical Event where innovation meets excellence! Megaleio brings together the brightest minds from across the country to showcase their skills, knowledge, and creativity. With a plethora of competitions, Megaleio offers a platform for students to explore the latest trends in technology, engage in meaningful discussions, and network with industry experts. Join us on this exciting journey of learning, collaboration, and fun as we celebrate the spirit of innovation and technical prowess at Megaleio!"</p>
         <button className="btn-veve">  <Link to="/events">Register Now !!!</Link></button>
          </div>
        </div>
      </section>
      <div className='divider-parent'>
		<div className='divider-child '><img src={img1} alt="" /></div>
	  </div>
      <Countdown></Countdown>
	  <div className='divider-parent'>
		<div className='divider-child '><img src={img} alt="" /></div>
	  </div>
      <Sponsor></Sponsor>
	 

    </Layout>
  );
}

export default HomePage;
