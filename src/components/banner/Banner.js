import React from 'react';
import ReactDom from 'react-dom';
import loginPic from './loginpic.png';
import './Banner.css';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';
import {BrowserRouter, Router, Routes, Route, Switch} from 'react-router-dom';
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
                <Button onClick={routeChange} className = 'login pic' variant="primary" type = "submit">Login</Button>
            </h1>

        </div>
            
    );}
  
  export default Banner;
  