import React from 'react';
import './Banner.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Banner() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = 'Login'; 
    navigate(path);
  }

    return (
        <div className="banner">
            {/* Make this a dynamic banner*/}
            <h1 id="h1banner">My Music Festival App
            <span className = 'loginPic'>
                <Button onClick={routeChange} variant="contained" type = "submit">Login</Button>
                </span>
            </h1>

        </div>
            
    );}
  
  export default Banner;
  