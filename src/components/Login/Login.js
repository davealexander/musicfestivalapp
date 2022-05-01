import React, {useState, useEffect, useContext} from 'react'
import { Col, Card, Row, Container } from 'react-bootstrap';
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import MMEAlogo from './MMEA_Logo_Gold.svg';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../../context/authProvider';

function Login() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = '../Register'; 
    navigate(path);
  }

    const [regData, setRegData] = useState({
        userEmail: "",
        userPassword: "",
    });

    const {user,setUser} = useContext(UserContext);

//Uses Axios library to post JSON info from submitScoresheet to MongoDB server. 
const handleSubmit = (e) => {
    //Stops page from refreshing
    e.preventDefault();
    axios.post(`http://localhost:5001/login/login`, regData)
    .then(res => setUser(res.data))
    console.log(setUser);
    navigate('../');
};

    return (
        <Container>
            <Row>
                <div style={{width:"300px"}} className="logoCard">
                    <img className='MMEAlogo' src={MMEAlogo} alt = "MMEAlogo" width="375" height="375"></img> 
                    <Button onClick={routeChange} variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                        Register
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

                        <Button onClick={handleSubmit} variant="primary" type="submit" style={{backgroundColor: "rgb(253,182,20)"}}>
                            SIGN IN
                        </Button>

                    </Form>
                    {console.log(regData)}
                </div>
            </Row>
        </Container>
    )

}

export default Login;
