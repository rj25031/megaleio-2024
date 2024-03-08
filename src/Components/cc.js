import React from "react";
import "../css/content.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { home_data } from "../Data/Data";
const Content = () => {
  const container = useRef(null);
  const headline = useRef(null); 
  useGSAP(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      //create scrolltrigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
      details.forEach((detail, index) => {
        const tml = gsap.timeline({
          scrollTrigger:{
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
            markers: false,
          }
        })

        tml.to(photos[index], { yPercent: 0 })
        tml.set(allPhotos[index], { autoAlpha: 0 });

      });
    });
  });
  return (
    <section ref={container} className=" bg-white text-black">
      <div class="gallery">
        <div class="left">
          <div class="desktopContent">
            {home_data.map((data, index) => {
              return (
                <div key={index} class="desktopContentSection">
                  <h1 ref={headline}>Red</h1>
                  <p>
                    Red is a color often associated with strong emotions such as
                    passion, love, and anger. It's a bold and attention-grabbing
                    color that can evoke feelings of excitement, warmth, and
                    energy.
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div class="right">
          <div class="mobileContent">
            <div class="mobilePhoto red"></div>
            <h1>Red</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>

            <div class="mobilePhoto green"></div>
            <h1>Green</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.{" "}
            </p>

            <div class="mobilePhoto pink"></div>
            <h1>Pink</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>

            <div class="mobilePhoto blue"></div>
            <h1>Blue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>

          <div class="desktopPhotos">
            <div class="desktopPhoto red"></div>
            <div class="desktopPhoto green"></div>
            <div class="desktopPhoto pink"></div>
            <div class="desktopPhoto blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
