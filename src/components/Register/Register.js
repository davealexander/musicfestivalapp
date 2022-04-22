import React, { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './Register.css'
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import MMEAlogo from './MMEA_Logo_Gold.svg';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = '../Login'; 
    navigate(path);
  }

        //Function that creates JSON body to submit to MONGODB server  
        const [regData, setRegData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConf: "",
        });
    
        //Uses Axios library to post JSON info from submitScoresheet to MongoDB server. 
      const handleSubmit = e => {
        //Stops page from refreshing
        e.preventDefault();
        axios.post(`http://localhost:5001/users/add`, regData)
        .then(res =>console.log(res.data))      
     };
    
    const [posts, setPost] = useState([]);
    
    useEffect(() => {
       axios.get('http://localhost:5001/userregistration/').then((response) => {setPost(response.data); console.log(response.data);});
      },
      []);

    return (
        <Container>
            <Row>
                <div style={{width:"100px"}} className="logoCard">
                    <img className='MMEAlogo' src={MMEAlogo} alt = "MMEAlogo" width="375" height="375"></img> 
                    <Button onClick={routeChange} variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                        ALREADY HAVE AN ACCOUNT?
                    </Button>
                </div>

                <div style={{width:"400px"}}>
                    <Form as ={Col} className="registerCard">
                    <Form.Label style={{fontSize:"30px"}}>Create an Account</Form.Label>

                    <Row className="mb-3" >
                    <Form.Group as ={Col} controlId="firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="first name" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group as ={Col} controlId="lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="last name" placeholder="Last Name" />
                    </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="confirm password" placeholder="Confirm Password" />
                    </Form.Group>

            
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Row>
    </Container>
    )
}

export default Register;