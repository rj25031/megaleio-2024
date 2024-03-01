import React, { useEffect } from "react";
import Layout from "../Components/Layouts/Layout";
import "../css/about.css";

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

  let ccccc = [
    { content: "right", media: "left" },
    { content: "left", media: "right" },
    { content: "right", media: "left" },
    { content: "right", media: "left" },
    { content: "left", media: "right" },
    { content: "right", media: "left" }, 
  ];
  return (
    <Layout>
      <div className="main-body">
      <div className="container-about">
        <section className="gallery-about">
          {ccccc.map((data, index) => [
            <div key={index} className="frame">
              <div className={`frame__content text-${data.content}`}>
                <h3 className="text-center">Megalieo 2024</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  odit ad autem quam fuga qui quidem cumque illum iste.
                  Distinctio, totam praesentium ab soluta obcaecati magni
                  numquam aspernatur quo veritatis!
                </p>
              </div>
            </div>, 
            <div key={index} className="frame">
              <div className="frame__content">
                <div
                  className={`frame-media frame-media_${data.media}`}
                  style={{
                    backgroundImage: "url('/Assets/compressed_example.webp')",
                  }}
                ></div>
              </div>
            </div>,
            <div key={index} className="frame"></div>,
          ])}
         

          <div className="frame">
            <div className="frame__content">
              <img
                className="frame-media"
                src="/Assets/compressed_example.webp"
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
            <div className="frame__content"><h3>Megaleio 2024</h3></div>
          </div>
        </section>
      </div>
      </div>
    </Layout>
  );
}

export default About;
