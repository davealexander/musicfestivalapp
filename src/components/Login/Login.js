import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card, Row, Container } from 'react-bootstrap';
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
//import { Link } from "react-router-dom";
import MMEAlogo from './MMEA_Logo_Gold.svg';
import { useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = '../Register'; 
    navigate(path);
  }

    return (
        <Container>
            <Row>
                <div style={{width:"300px"}} className="logoCard">
                    <img className='MMEAlogo' src={MMEAlogo} alt = "MMEAlogo" width="375" height="375"></img> 
                    <Button onClick={routeChange} variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                        NEED AN ACCOUNT?
                    </Button>
                </div>
                <div style={{width:"500px"}}>
                    <Form as ={Col} className="loginCard">
                        <Form.Label style={{fontSize:"30px"}}> Sign In</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => setRegData({...regData, userEmail: e.target.value})} 
                            value={regData.userEmail} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                            onChange={(e) => setRegData({...regData, userPassword: e.target.value})} 
                            value={regData.userPassword} />
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