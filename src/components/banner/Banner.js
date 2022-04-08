import React from 'react';
import loginPic from './loginpic.png';
import './Banner.css';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';

function Banner() {
    return (
        <div className="banner">
            {/* Make this a dynamic banner*/}
            <h1 id="h1banner">My Music Festival App
            <Button  className = 'login pic' variant="primary" type = "submit">Login</Button>
                {/* <img className='loginPic' src={loginPic} alt = "loginpicture"></img> */}
            </h1>

        </div>
    );}
  
  export default Banner;
  