import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="me">
        <h1 className="h1-title">About Me</h1>
        <p>
          Hello, I am Hüseyin Bağator. I am a computer programming graduate
          living in Kocaeli, Turkey, and working as a frontend developer. I am
          passionate about keeping up with the rapidly changing landscape of the
          technology world and staying up-to-date. After graduating from Karaman
          Mehmet Bey University, I pursued various training opportunities to
          enhance my skills in frontend development. My innovative mindset keeps
          me constantly open to exploring new technologies and trends. My desire
          for continuous self-improvement, collaborative attitude, and success
          in teamwork allow me to work harmoniously with project teams. This
          enables me to ensure that projects are completed on time and with
          success.
        </p>
      </div>
      <div className="work">
        <div>
          <h1 className="h1-title">Work Experience</h1>
          <div className="work-title">
            <h2 className="title-about">Junior Frontend Developer</h2>
            <p className="btn-succes">Full Time Intern</p>
          </div>
          <div className="bt-text">
            <p>Ağaçkakan Study Cafe</p>
            <p>Turkey,Eskisehir(Remote)</p>
            <p>01.04.2023</p>
          </div>
        </div>
      </div>
      <div className="edu">
        <h1 className="h1-title">Education</h1>
        <div>
          <h2 className="title-about">Karaman Mehmet Bey University</h2>
          <div className="bt-text">
            <p>Computer Programming</p>
            <p>2023</p>
          </div>
        </div>
        <div>
          <h2 className="title-about">
            React JS : Applied React JS -Redux Tutorial{" "}
          </h2>
          <div className="bt-text">
            <p>Can Boz</p>
            <p>2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
