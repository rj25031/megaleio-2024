import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './../../css/footer.css';

const Footer = () => {
  return (
	  <footer className="footer">
        <div className="footer-top">
		<h3 className="footer-title">Contact Us</h3>
        
        <div className="footer-main-content">
      <div className="footer-content">
          <ul className="footer-list">
			<li className='footer-item'>
				<div className="footer-link-title">MEGALEIO</div>
			</li>
            <li className="footer-item">
              <div className="footer-link-title">Email</div>
              <a href="mailto:megaleio@sjcem.edu.in" className="footer-link">
                <FaEnvelope /> megaleio@sjcem.edu.in 
              </a>
            </li>
            <li className="footer-item">
              <div className="footer-link-title">Phone Numbers</div>
              <ul className="footer-phone-numbers">
                <li className="footer-phone-number">
                  <a href="tel:+918147334657" className="footer-link">
                    <FaPhone /><h1>Deep Patil </h1>&nbsp;  +91 97653 92092
                  </a>
                </li>
                <li className="footer-phone-number">
                  <a href="tel:+917020529126" className="footer-link">
                    <FaPhone /><h1>Nirmit Patil</h1>&nbsp; +91 7020529126
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-item">
              <div className="footer-link-title">Socials</div>
              <ul className="footer-social-links">
                {/* <li className="footer-social-link">
                  <a href="https://www.facebook.com/SVKMDJSCE/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li className="footer-social-link">
                  <a href="https://www.linkedin.com/school/svkm-dwarkadas-j-sanghvi-college-of-engineering/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <FaLinkedinIn /> LinkedIn
                  </a>
                </li> */}
                <li className="footer-social-link">
                  <a href="https://www.instagram.com/megaleio2024/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <FaInstagram /> Instagram
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-item">
              <div className="footer-link-title">Address</div>
              <a href="https://maps.app.goo.gl/jrPEuCuDwFQkbigL7" target="_blank" rel="noopener noreferrer" className="footer-link">
                <FaMapMarkerAlt /> Palghar - Manor Rd, near Shakti Udyog, Industrial Area, Vevoor, Palghar, Maharashtra 401404
              </a>
            </li>
          </ul>
        </div>
		  <div className="map-container">  
		 	 <div className="google-map">
                    <iframe
						title='sjcem map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.154502250581!2d72.78131921475183!3d19.706045236986512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71c92fbd91e67%3A0x2a3ce68676417a45!2sSt.%20John%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1575310221011!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    />
                </div>
		  </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
