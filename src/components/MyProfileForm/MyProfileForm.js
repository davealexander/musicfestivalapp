import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './MyProfileForm.css'
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';

function MyProfileForm() {
    return (
        <Container>
            <Row>
                <div style={{width:"500px", fontSize:"20px"}} className="profileCard">
                    <Form.Label style={{fontSize:"30px"}}>My Profile </Form.Label>

                    <Form> 

                    <Row className="mb-3" >
                    <Form.Group as ={Col} controlId="firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="first name" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group as ={Col} controlId="lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="last name" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMMEANumber">
                        <Form.Label>MMEA Number:</Form.Label>
                        <Form.Control type="mmea number" placeholder="Enter number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSchool">
                        <Form.Label>School:</Form.Label>
                        <Form.Control type="school" placeholder="Enter school" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress1">
                        <Form.Label>Address Line 1:</Form.Label>
                        <Form.Control type="address 1" placeholder="Enter street number and name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress2">
                        <Form.Label>Address Line 2:</Form.Label>
                        <Form.Control type="address 2" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCity">
                        <Form.Label>City:</Form.Label>
                        <Form.Control type="city" placeholder="Enter city" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formState">
                        <Form.Label>State:</Form.Label>
                        <Form.Control type="state" placeholder="Enter state" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formZipcode">
                        <Form.Label>Zip Code:</Form.Label>
                        <Form.Control type="zipcode" placeholder="Enter zip code" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Phone number:</Form.Label>
                        <Form.Control type="phone number" placeholder="Phone number" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                        SUBMIT CHANGES
                    </Button>
                    </Row>
                    </Form>
                </div>
            </Row>
        </Container>
    )
}

export default MyProfileForm;