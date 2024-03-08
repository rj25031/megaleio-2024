import React from "react";
import "../css/cont.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { home_data } from "../Data/Data";

const Content = () => {
  // const gallery = useRef(null);
  // const pyd = useRef(null);
  // useGSAP(
  //   () => {
  //     // gsap.registerPlugin(ScrollTrigger);

  //     const tml = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: pyd.current,
  //         pin: ".right",
  //         pinSpacing: false,
  //         // animation: animation,
  //         scrub: 1,
  //         markers: true,
  //       },
  //     });

  //     tml.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

  //     tml.to(".photo:not(:first-child)", {
  //       opacity: 1,
  //       scale: 1,
  //       duration: 1,
  //       stagger: 1,
  //     });

  //     // ScrollTrigger.create({
  //     //   trigger: gallery.current,
  //     //   start: "top top",
  //     //   end: "bottom bottom",
  //     //   pin: ".right",
  //     //   pinSpacing: false,
  //     //   animation: animation,
  //     //   scrub: false,
  //     //   markers: true,
  //     // });
  //   },
  //   { scope: pyd.current }
  // );

  return (
    <section className="pyd">
      <div className="gallery sticky top-0">
        <div className="left">
          <div className="detailsWrapper">
            {home_data.map((data, index) => {
              return (
                <div key={index} className="details flex flex-row">
                  <div>
                    <h1 className="headline">{data.title}</h1>
                    <p className="text">{data.desc}</p>
                  </div>
    
                  <div className="img">
                    <img src={data.img} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="right">
          <div className="photos">
            {home_data.map((data, index) => {
              return (
                <div key={index} className="photo">
                  <img src={data.img} alt="img" />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Content;
