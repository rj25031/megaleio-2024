import React, { useEffect, useState } from "react";
import Layout from "../Components/Layouts/Layout";
import "./../css/schedule.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Schedule() {
  const [current, setCurrent] = useState(1);
  AOS.init();

  const scheduleData = [
    {
      id: 1,
      day: 1,
      title: 'Inauguration',
      time: '10:00 to 12:00 P.M.',
      place: 'Quadrangle',
    },
    {
      id: 2,
      day: 1,
      title: 'Open Mic',
      time: '12:45 to 2:30 P.M.',
      place: 'Quadrangle A',
    },
    {
      id: 3,
      day: 1,
      title: 'Blind C',
      time: '1:00 to 3:00 P.M.',
      place: 'Lab (A-Wing, IT Dept.)',
    },
    {
      id: 4,
      day: 1,
      title: 'Code Relay',
      time: '7:00 P.M.',
      place: 'Online Mode',
    },
    {
      id: 5,
      day: 2,
      title: 'Open Mic',
      time: '9:00 A.M.',
      place: 'Quadrangle',
    },
    {
      id: 6,
      day: 2,
      title: 'Neon Cricket(Girls)',
      time: '9:00 A.M.',
      place: 'BCR B Wing, First Floor',
    },
    {
      id: 7,
      day: 2,
      title: ' Neon Cricket(Boys)',
      time: '11:00 A.M.',
      place: 'BCR B Wing, First Floor',
    },
    {
      id: 8,
      day: 2,
      title: 'Bridge It',
      time: '1:30 P.M.',
      place: 'Auditorium',
    },
    {
      id: 9,
      day: 2,
      title: 'Business Plan Presentation',
      time: '1:30 P.M.',
      place: 'First Floor Computer Classroom',
    },
    {
      id: 10,
      day: 2,
      title: 'Laser Tag',
      time: '3:30 P.M.',
      place: 'First Floor',
    },
    {
      id: 11,
      day: 3,
      title: 'Tech Quiz',
      time: '9:00 A.M.',
      place: 'Third Floor, A23 IT Dept.',
    },
    {
      id: 12,
      day: 3,
      title: 'Tech Quiz',
      time: '9:00 A.M.',
      place: 'Third Floor, A23 IT Dept.',
    },
    {
      id: 13,
      day: 3,
      title: 'Robo Soccer',
      time: '10:00 A.M.',
      place: 'Quadrangle',
    },
    {
      id: 14,
      day: 3,
      title: 'Junkyard War',
      time: '11:00 A.M.',
      place: 'Quadrangle',
    },
    {
      id: 15,
      day: 3,
      title: 'Robomaze',
      time: '12:30 P.M.',
      place: 'Quadrangle',
    },
    {
      id: 16,
      day: 3,
      title: 'BGMI',
      time: '2:30 P.M.',
      place: 'Lab (3rd Floor IT Dept.)',
    },
  ]


   function handleScroll(id){
   console.log(id);
   }
  return (
    <Layout>
      {/* <div className="timeline fixed px-10 text-white top-40 z-50">
        <ul>
          <li onClick={()=>{setCurrent(5)}}>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
          <li>10.00 a.m - 11.00 a.m </li>
        </ul>
      </div> */}
      <div className="flex flex-col">
      {scheduleData.map((tl, index) => {
        return (
            <div  key={index}  id={`c${tl.id}`} className="card" >
              <div className="inauguration event">
                <p data-aos="fade-up" className="text-5xl mb-3">
                  DAY : {tl.day}
                </p>
                <h1 data-aos="fade-up" className="text-9xl mb-3">
                  {tl.title.toUpperCase()}
                </h1>
                <h2 data-aos="fade-up" className="text-4xl mb-3">
                  {tl.time}
                </h2>
                <h3 data-aos="fade-up" className="text-4xl mb-3">
                  {tl.place.toUpperCase()}
                </h3>
              </div>
            </div>
        );
      })}
      </div>
    </Layout>
  );
}

export default Schedule;
