import React, { useEffect } from "react";
import Layout from "../Components/Layouts/Layout";
import "../css/about.css";
import { about_data } from "../Data/Data";

function About() {
  useEffect(() => {
    let zSpacing = -800,
      lastPos = zSpacing / 5,
      $frames = document.getElementsByClassName("frame"),
      frames = Array.from($frames),
      zVals = [];

    window.onscroll = function () {
      let top = document.documentElement.scrollTop,
        delta = lastPos - top;
      lastPos = top;

      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.5;

        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}`
        );
      });
    };

    window.scrollTo(0, 1);
  }, []);

  return (
    <Layout>
      <div className="main-body">
        <div className="container-about">
          <section className="gallery-about">
            {about_data.map((data, index) => [
              <div key={index} className="frame">
                <div className={`frame__content text-${data.content}`}>
                  <h3 className="text-center">{data.name}</h3>
                  <h4 className="text-center">{data.designation}</h4>
                  <p>{data.description}</p>
                </div>
              </div>,
              <div key={index} className="frame">
                <div className="frame__content">
                  <div
                    className={`frame-media frame-media_${data.media}`}
                    style={{
                      backgroundImage: `url("${data.img}")`,
                    }}
                  ></div>
                </div>
              </div>,
              <div key={index} className="frame"></div>,
            ])}

            <div className="frame">
              <div className="frame__content">
                <img
                  className="frame-media frame-last"
                  src="Assets/megaleio2023.jpg"
                  // autoplay
                  // loop
                  // muted
                  alt="photodd"
                ></img>
              </div>
            </div>

            <div className="frame"></div>
            <div className="frame"></div>

            <div className="frame">
              <div className="frame__content">
                <h3>Megaleio 2024</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default About;
