import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './MyProfileForm.css'
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function MyProfileForm() {
    //Function that creates JSON body to submit to MONGODB server  
    const [regData, setRegData] = useState({
        firstName: "",
        lastName: "",
        userEmail: "",
        MMEANumber: "",
        school: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
        phoneNumber: "",
    });

    //Uses Axios library to post JSON info from submitScoresheet to MongoDB server. 
  const handleSubmit = e => {
    //Stops page from refreshing
    e.preventDefault();
    axios.post(`http://localhost:5001/users/update/id:62620cf2293866d93d449d68`, regData)
    .then(res =>console.log(res.data))      
 };

const [posts, setPost] = useState([]);



//MANUAL TEST
//GRAB object ID of Registered User
//Example go to mongodb.com, sign in with user, go to collections, in user registration grab objectID
//i.e frank sinatra = objectid 62620cf2293866d93d449d68
//fill in id url (inside of handlesubmit function) with this (i.e http://localhost:5001/userregistration/id:62620cf2293866d93d449d68)

useEffect(() => {
   axios.get(`http://localhost:5001/userregistration/id:62620cf2293866d93d449d68`).then((response) => {setPost(response.data); console.log(response.data);});
  },
  []);

    return (
        <Container>
            <Row>
                <div style={{width:"500px", fontSize:"20px"}} className="profileCard">
                    <Form.Label style={{fontSize:"30px"}}>My Profile </Form.Label>

                    <Form onSubmit={handleSubmit}> 

                    <Row className="mb-3" >
                    <Form.Group as ={Col} controlId="firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="first name" placeholder="First Name" 
                            onChange={(e) => setRegData({...regData, firstName: e.target.value})} 
                            value={posts.firstName} />
                    </Form.Group>
                    <Form.Group as ={Col} controlId="lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="last name" placeholder="Last Name"
                            onChange={(e) => setRegData({...regData, lastName: e.target.value})} 
                            value={regData.lastName} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            onChange={(e) => setRegData({...regData, userEmail: e.target.value})} 
                            value={regData.userEmail} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMMEANumber">
                        <Form.Label>MMEA Number:</Form.Label>
                        <Form.Control type="mmea number" placeholder="Enter number"  
                        onChange={(e) => setRegData({...regData, MMEANumber: e.target.value})} 
                        value={regData.MMEANumber}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSchool">
                        <Form.Label>School:</Form.Label>
                        <Form.Control type="school" placeholder="Enter school" 
                            onChange={(e) => setRegData({...regData, school: e.target.value})} 
                            value={regData.school} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress1">
                        <Form.Label>Address Line 1:</Form.Label>
                        <Form.Control type="address 1" placeholder="Enter street number and name" 
                            onChange={(e) => setRegData({...regData, address1: e.target.value})} 
                            value={regData.address1} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress2">
                        <Form.Label>Address Line 2:</Form.Label>
                        <Form.Control type="address 2" placeholder=""
                            onChange={(e) => setRegData({...regData, address2: e.target.value})} 
                            value={regData.address2} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCity">
                        <Form.Label>City:</Form.Label>
                        <Form.Control type="city" placeholder="Enter city" 
                        onChange={(e) => setRegData({...regData, city: e.target.value})} 
                        value={regData.city} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formState">
                        <Form.Label>State:</Form.Label>
                        <Form.Control type="state" placeholder="Enter state" 
                            onChange={(e) => setRegData({...regData, state: e.target.value})} 
                            value={regData.state} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formZipcode">
                        <Form.Label>Zip Code:</Form.Label>
                        <Form.Control type="zipcode" placeholder="Enter zip code" 
                            onChange={(e) => setRegData({...regData, zipcode: e.target.value})} 
                            value={regData.zipcode} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Phone number:</Form.Label>
                        <Form.Control type="phone number" placeholder="Phone number" 
                        onChange={(e) => setRegData({...regData, phoneNumber: e.target.value})} 
                        value={regData.phoneNumber} />
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