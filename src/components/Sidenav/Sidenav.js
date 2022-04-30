import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Sidenav.css'

function Sidenav() {
    return (
      <Container className='sideNavContainer'>
       <div className="sideNav"> 
          <Navbar className='navColor' variant="dark">    
          <ul>
              <h2>Maine Music Educator Association</h2>
              <li className = 'navText'><a href='/'><HomeIcon/><span className='invisible'>_</span>Home</a></li>
              <li className = 'navText'><a href='/MyProfile'><AccountCircleIcon/><span className='invisible'>_</span>My Profile</a></li>
              <li className = 'navText'><a href='/StudentRegistration'><PersonAddIcon/><span className='invisible'>_</span>Registration</a></li>
              <li className = 'navText'><a href='/Scoresheets'><AssignmentIcon/><span className='invisible'>_</span>Scoresheets</a></li>

          </ul>
        </Navbar>
        </div>
        </Container>
    );
  }

  export default Sidenav;
