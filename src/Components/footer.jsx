import React from "react";
import footergithub from "../images/footergithub.svg";
import linkedinfooter from "../images/linkedin-footer.svg";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div>
      <div>
        <p>bagatorhuseyin0@gmail.com</p>
        <div>
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

      <div className="footer-nav">
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
    </div>
  );
}

export default footer;
