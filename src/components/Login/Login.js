import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card, Row, Container } from 'react-bootstrap';
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
//import { Link } from "react-router-dom";
import MMEAlogo from './MMEA_Logo_Gold.svg';

function Login() {
    return (
        <Container>
            <Row>
                <div style={{width:"300px"}} className="logoCard">
                    <img className='MMEAlogo' src={MMEAlogo} alt = "MMEAlogo" width="375" height="375"></img> 
                    <Button variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                        NEED AN ACCOUNT?
                    </Button>
                </div>
                <div style={{width:"500px"}}>
                    <Form as ={Col} className="loginCard">
                        <Form.Label style={{fontSize:"30px"}}> Sign In</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                            SIGN IN
                        </Button>
                    </Form>
                </div>
            </Row>
        </Container>
    )

}

export default Login;