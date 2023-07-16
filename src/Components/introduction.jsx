import React from 'react';
import Avatar from '../images/avatar-2-min.jpg'
import './introduction.css';

function introduction() {
  return (
    <div className='intro-container'>
        <div className='enter'>
            <p>
                  Hi 👋, My name is Hüseyin  I'm a Frontend Developer
            </p>
        </div>
        <div className='avatar'>
            <img src={Avatar} alt='Avatar' />
        </div>
    </div>
  )
}

export default introduction