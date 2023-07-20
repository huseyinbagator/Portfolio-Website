import React from "react";
import footergithub from "../images/footergithub.svg";
import linkedinfooter from "../images/linkedin-footer.svg";
import { Link } from "react-router-dom";
import './footer.css'

function footer() {
  return (
    <div className="footer-container">
      <div className="person">
        <p className="communication">0551 947 26 27</p>
        <p className="communication">bagatorhuseyin0@gmail.com</p>
       
       
        <div className="footer-social">
          <a
            target="_blank"
            href="https://github.com/huseyinbagator"
            alt="Github"
            rel="noreferrer"
          >
            <img src={footergithub} alt="Github Logo" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/h%C3%BCseyin-ba%C4%9Fator-348960199/"
            alt="Linkedin"
            rel="noreferrer"
          >
            <img src={linkedinfooter} alt="Linkedin Logo" />
          </a>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-bottom">
      <div className="footer-router">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/tech-stack">
            Tech Stack
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
      </div>
      <div className="built">
        <p>Built by Hüseyin Bağator 2023</p>  
      </div>  
      </div>
    </div>
  );
}

export default footer;
