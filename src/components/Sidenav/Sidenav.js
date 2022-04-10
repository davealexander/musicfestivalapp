import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Sidenav.css'

function Sidenav() {
    return (
        <div className="sideNav"> 
        <Container className='sideNavContainer'>
          <Navbar className='navColor' variant="dark">    
          <ul>
              <h2>Maine Music Educator Association</h2>
              <li className = 'navText'><a href='/home'>Home</a></li>
              <li className = 'navText'><a href='/StudentRegistration'>Registration</a></li>
              <li className = 'navText'><a href='/Scheduler'>Scheduler</a></li>
              <li className = 'navText'><a href='/Scoresheets'>Scoresheets</a></li>
          </ul>
        </Navbar>
        </Container>
        </div>
    );
  }

  export default Sidenav; 