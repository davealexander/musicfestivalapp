import React, {useState, useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Col } from 'react-bootstrap';
import './MyProfile.css'
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function MyProfile() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = '../MyProfileForm'; 
    navigate(path);
  }

   //state variable for submitting data to MongoDB
   const [regData, setRegData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    MMEANumber: "",
    school: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    phoneNumber: "",
 });

  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/register/62620cf2293866d93d449d68').then((response) => {setPost(response.data); });
   },
   []);

    return (
        <Container>
            <Row>
                <div style={{width:"500px", fontSize:"20px"}} className="profileCard">
                    <Form.Label style={{fontSize:"30px"}}>My Profile 
                    <Button onClick={routeChange} variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                        Edit
                    </Button></Form.Label>
                    <p>Name: {regData.firstName} {regData.lastName}</p>
                    <p>Email: {regData.userEmail}</p>
                    <p>Password: {regData.userPassword}</p>
                    <p>MMEA Number: {regData.MMEANumber}</p>
                    <p>School: {regData.school}</p>
                    <p>Address Line 1: {regData.address1}</p>
                    <p>Address Line 2: {regData.address2}</p>
                    <p>City: {regData.city}</p>
                    <p>State: {regData.state}</p>
                    <p>Zip Code: {regData.zipcode}</p>
                    <p>Phone Number: {regData.phoneNumber}</p>
                </div>
            </Row>
        </Container>
    )
}

export default MyProfile;
