import React, { useRef } from "react";
import "../css/home.css";
import Layout from "../Components/Layouts/Layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import meg from "../images/megaleio2020.jpg";
import rw from "../images/robo war20.jpg";
import rs from "../images/robo soccer.jpg"
import { home_data } from "../Data/Data"
function HomePage() {
  const container = useRef(null);
  const cloudContainer = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "left+=30 left", // Adjusted syntax
          end: "+=2500",
          pin: true,
          // pinSpacer: true,
          scrub: 1,
          markers:true,
        },
      });

      timeline.addLabel("card1");
      timeline.to(".card-1", {
        yPercent: 0,
        opacity: 1,
      });

      timeline.from(".card-2", {
        yPercent: 75,
        opacity: 0,
        duration: 2,
        stagger: 1,
      });

      timeline.addLabel("card11");
      timeline.to(".card-11", {
        yPercent: 0,
        opacity: 1,
      });

      timeline.from(".card-22", {
        yPercent: -75,
        opacity: 0,
        duration: 2,
        stagger: 1,
      });

      timeline.addLabel("card2");

      timeline.to(
        ".card-1",
        {
          scale: 1.01,
          yPercent: -0.5,
          opacity: 0.5,
        },
        "-=0.3"
      );

      timeline.to(".card-2", {
        yPercent: 0,
        opacity: 1,
      });

      timeline.from(".card-3", {
        yPercent: 75,
        opacity: 0,
        duration: 2,
        stagger: 1,
      });

      timeline.addLabel("card22");

      timeline.to(
        ".card-11",
        {
          scale: 1.01,
          yPercent: 0.5,
          opacity: 0.5,
        },
        "-=0.3"
      );

      timeline.to(".card-22", {
        yPercent: 0,
        opacity: 1,
      });

      timeline.from(".card-33", {
        yPercent: -75,
        opacity: 0,
        duration: 2,
        stagger: 1,
      });

      timeline.addLabel("card3");

      timeline.to(
        ".card-2",
        {
          scale: 1,
          yPercent: -0.4,
          opacity: 0.6,
        },
        "-=0.3"
      );

      timeline.to(".card-3", {
        yPercent: 0,
        opacity: 1,
      });

      timeline.to(".card-3", {});

      timeline.addLabel("card33");

      timeline.to(
        ".card-22",
        {
          scale: 1,
          yPercent: 0.4,
          opacity: 0.6,
        },
        "-=0.3"
      );

      timeline.to(".card-33", {
        yPercent: 0,
        opacity: 1,
      });

      timeline.to(".card-33", {});
    },
    { scope: container }
  );


  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: cloudContainer.current,
          pin: true,
          pinSpacer: true,
          start: "left left", // Adjusted syntax
          end: "+=2500",
          scrub: 1,
        },
      });

      timeline.to(".corner-cloud-right", {
        xPercent: 100,
        duration:2,
        stagger:1,
        opacity:0.5,
      },'a');
      timeline.to(".corner-cloud-left", {
        xPercent: -100,
        duration:2,
        stagger:1,
        opacity:0.5,
      },'a');
      timeline.to(".mid-cloud", {
        scale:3,
        opacity:0,
        duration:2,
        stagger:1,
      },'a');
      timeline.to(".collage", {
        scale:2,
        opacity:0,
        duration:5,
        stagger:1,
      },'a');
      
    }
  )
  return (
    <Layout>
      <section ref={cloudContainer} className="main-section w-screen h-screen bg-black">
        <img className="logo-img" src="megaleio png.png" alt="megalio" />
          {/* <img className="mid-cloud" src="Assets\clouds\cloud4.png" alt="clouds" /> */}
          <h1 className="collage">st john collage and <br /> management Presents</h1>
        <div className="clouds">
          <img className="mid-cloud" src="Assets\clouds\cloud4.png" alt="clouds" />
          <img className="corner-cloud-right" src="Assets\clouds\cloud2.png" alt="clouds" />
          <img className="corner-cloud-left" src="Assets\clouds\cloud2.png" alt="clouds" />
        </div>
      </section>
      <section className="w-screen h-screen bg-white text-black">
        <div className="h">
          <h1>hello</h1>
        </div>
      </section>
{/* 
      <section className="container" ref={container}>
        <div className="main">
          <div className="img-cards">
           {home_data.map((data,index)=>{
            return(
              <div key={index} className={`img-card card-${index+1}`}>
              <img className="img1" src={'Assets/compressed_example.webp'} alt="alt"/>
            </div>
            );
           })}
          </div>
          <div className="content-cards">
            {home_data.map((data,index)=>{
              return(
              <div key={index} className={`content-card card-${index+1}${index+1} text-black`}>
              <h1>MEGALEIO 2020</h1>
              <p>
                The third installment of Megaleio held in 2020 was a great
                success. It ended with the discovery of new champions of coding,
                testing, construction and other Engineering related fields.
                Everyone participating in the event cannot win the events but
                everyone got some lifelong valuable experience.
              </p>
            </div>
              )
            })}
          </div>
        </div>
      </section> */}
    </Layout>
  );
}

export default HomePage;

