import React from 'react';
import '../css/sponsor.css';
import { sponsors,powered_by,co_powered } from '../Data/Data';



const Sponsor = ({ image, title }) => {
  return (
    <div className="sponsor-container">
      <img src={image} alt={title} className="sponsor-image" />
      <h3 className="sponsor-title">{title}</h3>
    </div>
  );
};


const Sponsors = () => {
  return (
	<div className="sponsors-container ">
		<h2 className="sponsors-heading">Our Sponsors</h2>

		<h2 className="sponsors-sub-heading titlesp">Title Sponsors</h2>
		<ul className="sponsors-list">
		{sponsors.map((sponsor, index) => ( 
		<li key={index} className="sponsors-item title-items">
			<Sponsor image={sponsor.img} title={sponsor.title} />
		</li>
		))}
		</ul>
		
		<h2 className="sponsors-sub-heading powered">Powered By</h2>
		<ul className="sponsors-list">
		{powered_by.map((powered_by, index) => (
		<li key={index} className="sponsors-item pow-items">
			<Sponsor image={powered_by.img} title={powered_by.title} />
		</li>
		))}
		</ul>

		<h2 className="sponsors-sub-heading">Co-Powered By</h2>
		<ul className="sponsors-list co-power">
		{co_powered.map((co_powered, index) => (
		<li key={index} className="sponsors-item">
			<Sponsor image={co_powered.img} title={co_powered.title} />
		</li>
		))}
		<li className='sponsors-item'>
			<div className='sponsor-title'>
				JJ Traders
			</div>
		</li>
		<li className='sponsors-item'>
			<div className='sponsor-title'>
				Concept Computers
			</div>
		</li>
		<li className='sponsors-item'>
			<div className='sponsor-title'>
				DeviKrupa
			</div>
		</li>
		</ul>

		{/* <h2 className="sponsors-sub-heading">Refreshments Sponsors</h2>
		<ul className="sponsors-list">
		{refreshment.map((refreshment, index) => (
		<li key={index} className="sponsors-item">
			<Sponsor image={refreshment.img} title={refreshment.title} />
		</li>
		))}
		</ul> */}



    </div>
  );
};

export default Sponsors;