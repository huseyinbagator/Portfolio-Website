import React from 'react';
import portfolio from '../images/portfolio.png';

function project() {

  return (
    <div className='project-container'>
        <h1>Projects</h1>
        <h2>Things I’ve built so far</h2>
        <div className='card'>
            <div className='image'>
                <img src={portfolio} alt="portfolio" />
            </div>
            <div >
                <h1 className='title'>Portfolio Website</h1>
                <p className='description'>Hello! This is my developer portfolio website that I built using React. This site is designed to showcase my work and skills.</p>
            </div>
            <div className='project-links'>
                <a href='https://github.com/huseyinbagator/Portfolio-Website'  alt="Github"  rel="noreferrer" target='_blank'>View Code</a>
                
            </div>
        </div>
    </div>
  )
}

export default project