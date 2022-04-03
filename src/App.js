import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidenav from './components/Sidenav/Sidenav';
import Banner from './components/banner/Banner';
// import Announcecard from './components/announcecard/Announcecard';
// import Todocard from './components/Todocard/Todocard';
import { Row, Col, Container} from 'react-bootstrap';
import StudentReg from './components/studentregistration/StudentReg';


function App() {
  return (

    // Add a container in the main app to fix navbar
    <div className="App">

     <Banner></Banner>
     <Sidenav></Sidenav>
     <Container>
       <Row>
        {/* <Col>
         <Announcecard></Announcecard>
        </Col>
        <Col>
          <Todocard></Todocard>
        </Col> */}
        <StudentReg></StudentReg>
       </Row>
     
     </Container>
    
    </div>
  );
}

export default App;

// import Navbar2 from './components/navbar/Navbar2';
// import Banner from './components/banner/Banner';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 {/* <Banner/>
    <Router>
      <Navbar2/>
      <Routes>
      <Route path='/' />
      </Routes>
    </Router> */}
