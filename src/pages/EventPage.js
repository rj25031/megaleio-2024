import React, { useState, useEffect } from "react";
import Layout from '../Components/Layouts/Layout'
import "../css/event.css";
import { event_list } from "../Data/Data";


const EventPage = () => {
 const event_list = [
  {
      id: 1,
      image: ccc,
      title: "CODE RELAY",
      time: "9:00 to 13:00",
      venue: "Lab ( A-Wing,IT dept. )",
      reg_cost: "Rs.100 Per Team",
      prize_pool: "10,000",
      entry_type: "Team of 3 member",
      desc: "Code Relay is a dynamic and collaborative coding competition that adds a unique twist to traditional coding challenges. Teams of participants work together in a relay-style format, passing the code from one member to another, each contributing to a larger project or solving a series of interconnected coding puzzles. This event not only tests individual coding skills but also emphasizes teamwork, communication, and adaptability. Join us for an exciting Code Relay, where the thrill of coding meets the challenge of seamless collaboration.",
      reg_link: "https://forms.gle/c2xNzjZw7MQ59X1P6",
    },
    {
      id: 2,
      image: roboWar,
      title: "ROBO WAR",
      time: "16:00 to 19:00",
      venue: "Quadrangle A",
      reg_cost: "Rs.1500 Per Team",
      prize_pool: "1,00,000",
      entry_type: "Team of 1-6 member",
      desc: "Robowar events provide a platform for enthusiasts to showcase their engineering and tactical skills while engaging in thrilling robot battles. The participants are required to build robot and battle in the arena arranged for them. The last standing robots wins!!",
      reg_link: "https://forms.gle/Lno2R9sUHQ7DQPdu6",
    },
    {
      id: 3,
      image: roboSoccer,
      title: "ROBO SOCCER",
      time: "10:00 to 13:00",
      venue: "Quadrangle A",
      reg_cost: "Rs.500 Per Team",
      prize_pool: "10,000",
      entry_type: "Team of 1-3 member",
      desc: "RoboSoccer is a variation of soccer where teams build and program autonomous robots to play against each other on a designated field. RoboSoccer promotes teamwork, strategy, and technical ingenuity, offering a captivating blend of technology and athleticism.",
      reg_link: "https://forms.gle/HGi5T97XJERi1okGA",
    },
    {
      id: 4,
      image: blindC,
      title: "BLIND C",
      time: "13:00 to 15:00",
      venue: "Lab ( A-Wing, IT dept. )",
      reg_cost: "Rs.100 Per Person",
      prize_pool: "10,000",
      entry_type: "Solo",
      desc: "Blind C is a unique event where participants code without a visual interface. With screens intentionally turned off, participants rely solely on their typing skills & time management. This immersive challenge tests adaptability, problem-solving, and mental agility. Join us for an engaging experience that showcases coding prowess beyond traditional visual cues. Let your skills shine in this one-of-a-kind coding challenge!",
      reg_link: "https://forms.gle/ZBt7SeWfpTyDHNuz7",
    },
    {
      id: 5,
      image: bpp,
      title: "BUSINESS PLAN PRESENTATION",
      time: "13:00 to 16:00",
      venue: "Copms Department Classrooms",
      reg_cost: "Rs.100 Per Team",
      prize_pool: "10,000",
      entry_type: "Team of 1-3 member",
      desc: "Business Plan Presentation is a concise, structured pitch that outlines the key aspects of a business venture. It typically includes information about the company's mission, target market, products or services, marketing strategy, revenue model, and financial projections. The presentation aims to convince investors, stakeholders, or potential partners of the viability and potential success of the business idea. Effective presentations are clear, persuasive, and backed by thorough research and analysis, highlighting the value proposition and competitive advantage of the venture.",
      reg_link: "https://forms.gle/ZWp6AZ838E6unUkt5",
    },
    {
      id: 6,
      image: megaHack,
      title: "MEGAHACK",
      time: "30 Hrs",
      venue: "TBA",
      reg_cost: "TBA",
      entry_type: "TBA",
      desc: " St. John College of Engineering and Management's Hackathon organized by students, for students. With this Hackathon, SJCEM strives to promote technical innovation and highlight students’ skills and abilities. We aim to bring out the best and brightest students, not just from SJCEM but from other universities all over India. The event is an opportunity for hackers to exchange their ideas, gain extra knowledge and to make good relations for  future collaborations. We wholeheartedly invite all the technophiles to this exciting Hackathon…",
      reg_link: "TBA",
    },
    {
      id: 7,
      image: valorant,
      title: "BGMI",
      time: "10:00 to 16:30",
      venue: "Lab ( A-Wing, IT dept. )",
      reg_cost: "Rs.200 Per Team",
      entry_type: "Team of 4 members",
      prize_pool: "5,000",
      desc: "Immerse yourself in the fast-paced world of BGMI, compete against other players, and emerge victorious in this action-packed mobile gaming phenomenon. Join the battleground, hone your skills, and claim victory in Battlegrounds Mobile India!",
      reg_link: "https://forms.gle/YPNZYqx4F4kr7FeP9",
    },
    {
      id: 8,
      image: neon,
      title: "NEON CRICKET",
      time: "9:00 to 13:00",
      venue: "BCR Wing B 1st Floor",
      reg_cost: "Rs.300 Per Team",
      prize_pool: "5,000",
      entry_type: "Team of 5+1 members",
      desc: "Neon Cricket is a vibrant and dynamic version of traditional cricket played indoors under neon lights. It features modified rules and equipment, with emphasis on fast-paced gameplay and entertainment.  Neon Cricket attracts players and spectators alike with its unique atmosphere and exciting format. It offers a thrilling alternative to traditional cricket, combining athleticism, strategy, and entertainment in a visually striking setting",
      reg_link: "https://forms.gle/ZPioMZAoCnR9FP6w5",
    },
    {
      id: 9,
      image: bridgeIt,
      title: "BRIDGE IT",
      time: "13:00 to 16:30",
      venue: "Auditorium",
      reg_cost: "Rs.150 Per Team",
      prize_pool: "10,000",
      entry_type: "Team of 3 members",
      desc: "The event is catered towards creative people and their ability to build a bridge like structure.The created structure should pass the pre-defined parameters to go for the ultimate point load test to check its strength.",
      reg_link: "https://forms.gle/aLQLsijCCcystZeG6",
    },
    {
      id: 10,
      image: line,
      title: "ROBO MAZE",
      time: "11:00 to 13:00",
      venue: "Quadrangle B",
      reg_cost: "Rs.500 Per Team",
      prize_pool: "10,000",
      entry_type: "Team of 2 members",
      desc: "Join us for an engaging RoboMaze experience, where innovation meets strategy in the quest for robotic navigation supremacy. Get ready for an exciting journey through the maze of robotics excellence!",
      reg_link: "https://forms.gle/uTBv2oQn2rqWA4zS9",
    },
    {
      id: 11,
      image: quiz,
      title: "TECH QUIZ",
      time: "9:00 to 13:00",
      venue: "Auditorium",
      reg_cost: "Rs.100 Per Team",
      prize_pool: "5000",
      entry_type: "Team of 3 members",
      desc: "TechQuiz is a competitive event where participants demonstrate their knowledge and expertise in various aspects of technology through a series of questions and challenges. It covers a wide range of topics including programming languages, algorithms, hardware, software, and emerging technologies. TechQuiz tests participants' technical skills, problem-solving abilities, and critical thinking under pressure. It provides an engaging platform for tech enthusiasts to showcase their knowledge, compete with peers, and learn from each other in a fun and challenging environment.",
      reg_link: "https://forms.gle/tuz8CJt2huxVs6y27",
    },
    {
      id: 12,
      image: omic,
      title: "POWER LIFTING",
      time: "12:45 to 14:30",
      venue: "Quadrangle A",
      reg_cost: "100",
      prize_pool: "Goodies",
      entry_type: "Solo",
      desc: "Powerlifting is a strength sport where competitors aim to lift as much weight as possible in three main lifts: squat, bench press, and deadlift. Participants compete within weight classes to lift the heaviest weight they can. Powerlifting emphasizes raw strength, technique, and mental toughness. Competitions are organized by federations and offer various levels of competition, from local meets to international championships. Powerlifting provides a platform for individuals to test their strength, set personal records, and compete against others in a supportive environment.",
      reg_link: "TBA",
    },
    {
      id: 13,
      image: laser_tag,
      title: "LASER TAG",
      time: "12:45 to 14:30",
      venue: "Quadrangle A",
      reg_cost: "500",
      prize_pool: "10,000",
      entry_type: "Team of 5 members",
      desc: "Laser Tag is an exhilarating recreational activity where players use infrared-emitting light guns to tag opponents and score points in a simulated combat environment. Players typically wear vests or targets that register hits from the opposing team's guns. Laser Tag combines elements of strategy, teamwork, and physical activity, making it an engaging experience for players of all ages.",
      reg_link: "TBA",
    },
    {
      id: 14,
      image: opmd,
      title: "CIVIL JUNKYARD",
      time: "12:45 to 14:30",
      venue: "Quadrangle A",
      reg_cost: "100",
      prize_pool: "10,000",
      entry_type: "Team of 3 members",
      desc: "Civil Junkyardis a unique and innovative challenge that encourages participants to unleash their creativity and engineering skills. In this competition, participants are tasked with transforming items from a junkyard scrap into functional and aesthetically pleasing creations related to civil engineering. This hands-on experience not only promotes resourcefulness but also emphasizes sustainable and eco-friendly design practices.",
      reg_link: "TBA",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);

  const timeRunning = 3000;
  let timeAutoNext = 14000;
  
  let runTimeOut;
  let carouselDom; 
  
  useEffect(() => {
    setCarouselItems(event_list);
    setThumbnails(event_list);
    setThumbnails((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  }, []);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      showSlider('next')
    }, timeAutoNext);
    
    return () => clearTimeout(timeout);
  }, [currentIndex]);
  
  
  const showSlider = (type) => {
    carouselDom = document.getElementsByClassName("carousel")[0];
    if (type === "next") {
      setCarouselItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      setThumbnails((prevItems) => [...prevItems.slice(1), prevItems[0]]);

      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      carouselDom.classList.add("next");
    } else {
      setCarouselItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, prevItems.length - 1),
      ]);
      setThumbnails((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, prevItems.length - 1),
      ]);

      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + carouselItems.length) % carouselItems.length
      );
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);
  };

   function handleClick(n) {
    if(n >= 0){
      showSlider('next');
      handleClick(n-1)
    }
   }

  return (
    <Layout>
    <div className="carousel">
    {/* <div className={`carousel ${currentIndex > 0 ? 'next' : ''}`}> */}
      <div className="list">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={item.image} alt={`Slide ${index}`} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.time}</div>
              <div className="des">{item.desc}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""}`}
            onClick={()=>{
              console.log(index);
              handleClick(index)}}
          >
            <img src={thumbnail.image} alt={`Thumbnail ${index}`} />
            <div className="content">
              <div className="title">{thumbnail.title}</div>
              <div className="description">{thumbnail.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={() => showSlider("prev")}>
          &lt;
        </button>
        <button id="next" onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>

      <div className="time"></div>
    </div>
    </Layout>
  );
};
export default EventPage;
