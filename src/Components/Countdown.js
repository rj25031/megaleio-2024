import React, { useState, useEffect } from 'react';
import '../css/countdown.css';

const TimerPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeRemaining() {
    const targetTime = new Date("March 22, 2024 10:00:00").getTime();
    const currentTime = new Date().getTime();
    const remainingMilliseconds = targetTime - currentTime;

    const day = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));
    const hour = Math.floor((remainingMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);

    return {
      day: day,
      hour: hour,
      min: min,
      sec: sec
    };
  }

  return (
    <section className='counter-section'>

    <div className="wrapper">
      <h1 className="heading-counter font-bold text-4xl">Countdown to Megaleio: Unleashing Innovation and Excellence!</h1>
      <p className="description-counter text-base">Join us for the most awaited national technical event, Megaleio! Prepare to witness groundbreaking innovations, connect with industry experts, and showcase your skills on a national platform. Get ready to be inspired, challenged, and amazed as we bring together the brightest minds in technology for an unforgettable experience. Mark your calendars and stay tuned for updates as we gear up to redefine the future together!</p>

      <div className="timer">
        <div className="sub_timer">
          <h1 className="digit">{timeRemaining.day}</h1>
          <p className="digit_name">Days</p>
        </div>
        <div className="sub_timer">
          <h1 className="digit">{timeRemaining.hour}</h1>
          <p className="digit_name">Hours</p>
        </div>
        <div className="sub_timer">
          <h1 className="digit">{timeRemaining.min}</h1>
          <p className="digit_name">Minutes</p>
        </div>
        <div className="sub_timer">
          <h1 className="digit">{timeRemaining.sec}</h1>
          <p className="digit_name">Seconds</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default TimerPage;
