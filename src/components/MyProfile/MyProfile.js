import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './MyProfile.css'
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import MMEAlogo from './MMEA_Logo_Gold.svg';
import { useNavigate } from "react-router-dom";

function MyProfile() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = '../MyProfileForm'; 
    navigate(path);
  }

    return (
        <Container>
            <Row>
                <div style={{width:"500px", fontSize:"20px"}} className="profileCard">
                    <Form.Label style={{fontSize:"30px"}}>My Profile 
                    <Button onClick={routeChange} variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                        Edit
                    </Button></Form.Label>
                    <p>Name: Bailee Bartash</p>
                    <p>Email: bartash.b@northeastern.edu</p>
                    <p>Password: ***********</p>
                    <p>MMEA Number: 123456789</p>
                    <p>School: John Bapst Memorial High School</p>
                    <p>Address Line 1: 100 Broadway</p>
                    <p>Address Line 2:</p>
                    <p>City: Bangor</p>
                    <p>State: ME</p>
                    <p>Zip Code: 04401</p>
                    <p>Phone Number: 2078056207</p>
                </div>
            </Row>
        </Container>
    )
}

export default MyProfile;