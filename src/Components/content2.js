import React, {useEffect, useState} from "react";
import "./../css/content2.css"
import { home_data } from "../Data/Data";

const Section = ({ img, imgInnerStyle, title, content, active }) => {
	return (
	  <div className={`section ${active ? 'active' : ''}`}>
		<div className="section-img">
		<div
    className="section-img-inner"
    style={{ ...imgInnerStyle, backgroundImage: `url(${img})` }}
    ></div>

		</div>
		<div className="section-body">
		  <div className="section-text">
			<h2>{title}</h2>
			<p>{content}</p>
		  </div>
		</div>
	  </div>
	);
  };

  const Content = () => {
	const [activeSection, setActiveSection] = useState(0);
  
	useEffect(() => {
		const handleScroll = () => {
		  setTimeout(() => {
			const windowHeight = window.innerHeight;
			const scrollPosition = window.scrollY + windowHeight / 3;
	
			home_data.forEach((section, index) => {
			  const sectionElement = document.getElementById(`section-${section.id}`);
			  if (sectionElement) {
				const sectionTop = sectionElement.offsetTop;
				const sectionBottom = sectionTop + sectionElement.offsetHeight;
	
				if (sectionTop <= scrollPosition && sectionBottom >= scrollPosition) {
				  setActiveSection(index);
				}
			  }
			});
		  }, 100);
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);


	
	return (
		<div className="App">
		{home_data.map((section, index) => (
		  <Section
			key={section.id}
			id={section.id}
			title={section.title}
			content={section.desc}
			img={section.img}
			active={activeSection === index}
		  />
		))}
	  </div>
	);
	
	  
	  
	};
export default Content;