import { logDOM } from '@testing-library/react';
import React from 'react'
import loginPic from './loginpic.png'
import './Banner.css'
import { Dropdown } from 'bootstrap';

function Banner() {
    return (
        <div className="banner">
            {/* Make this a dynamic banner*/}
            <h1 id="h1banner">My Music Festival App
                <img className='loginPic' src={loginPic} alt = "logo"></img>
            </h1>

        </div>
    );}
  
  export default Banner;
  