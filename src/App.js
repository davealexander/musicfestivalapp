import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidenav from './components/Sidenav/Sidenav';
import Banner from './components/banner/Banner';
import Announcecard from './components/announcecard/Announcecard';
import Todocard from './components/Todocard/Todocard';
import { Row, Col, Container} from 'react-bootstrap';
import StudentReg from './components/studentregistration/StudentReg';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Scoresheet from './components/Scoresheet/scoresheet';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
   <Router>
     <Sidenav></Sidenav>
     <Banner></Banner>
     <Routes>
       <Route path='/' element={<><Container><Row><Col><Announcecard/></Col><Col><Todocard/></Col></Row></Container></>}/>
       <Route path='/studentregistration' element={<StudentReg/>}/>
       <Route path='/scoresheets' element={<Scoresheet/>}></Route>
       <Route path='/myprofile' element={<MyProfile/>}></Route>
     </Routes>
   </Router>
  );
}

export default App;