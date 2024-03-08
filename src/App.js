import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { images } from "./Data/Data";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import Schedule from "./pages/Schedule";
import About from "./pages/About";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    Promise.all(
      images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      })
    ).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  if (!imagesLoaded) {
    return <Loader />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/events" element={<EventPage />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
