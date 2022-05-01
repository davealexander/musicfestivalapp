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
      <Container  className='sideNavContainer'>
       <div className="sideNav"> 
          <Navbar  className='navColor' variant="dark">    
          <ul>
              <h2>Maine Music Educator Association</h2>
              <li className = 'navText' ><Link to='/'><HomeIcon/><span className='invisible'>_</span>Home</Link></li>
              <li className = 'navText' ><Link to="/MyProfile"><AccountCircleIcon/><span className='invisible'>_</span>MyProfile</Link></li>
              <li className = 'navText' ><Link to='/StudentRegistration'><PersonAddIcon/><span className='invisible'>_</span>Registration</Link></li>
              <li className = 'navText' ><Link to='/Scoresheets'><AssignmentIcon/><span className='invisible'>_</span>Scoresheets</Link></li>

          </ul>
        </Navbar>
        </div>
        </Container>
    );
  }

  export default Sidenav;
