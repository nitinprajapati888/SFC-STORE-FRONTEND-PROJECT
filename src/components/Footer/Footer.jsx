import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum odit
            eligendi repellendus accusantium quam molestias? Dignissimos ratione
            dolore sequi ad.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone:8881182348</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email:np206111@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">BlUetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Term & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottem-bar">
        <div className="bottem-bar-content">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            alias!
          </div>
          <img src={Payment} alt="Payment-imeages" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
