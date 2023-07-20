import React from 'react';
import portfolio from '../images/portfolio.png';
import './project.css';

function project() {

  return (

    <div className='project-container'>
        <h1 className='container-title center'>Projects</h1>
        <h2 className='container-description center'>Things I’ve built so far</h2>
        <div className='card'>
            <div className='image'>
                <img src={portfolio} alt="portfolio" />
            </div>
            <div className='project-description' >
                <h1 className='title-portfolio'>Portfolio Website</h1>
                <p className='description-portfolio'>Hello! This is my developer portfolio website that I built using React. This site is designed to showcase my work and skills.</p>
                <p className='stack'>Tech stack : React, Css</p>
                 <div className='project-links'>
                <a href='https://github.com/huseyinbagator/Portfolio-Website'  alt="Github"  rel="noreferrer" target='_blank'>View Code</a>
                
            </div>
            </div>
           
        </div>
    </div> 
  )
}

export default project