import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Button } from 'react-bootstrap';
import  Radio  from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import './scoresheet.css'
import axios from 'axios';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@mui/material';

function Scoresheet() {
   
   
   const [success, setSuccess]= useState(false);
   const [message, setMessage]= useState("Scoresheet Submitted!"); 

   //function that clears the success message after 5 seconds
   function clearMessage(){
    setTimeout(() => setMessage(""), 5000);
    setTimeout(() => setSuccess(false), 5000);
    setTimeout(() => setMessage("Scoresheet Submitted"), 6000);
 }
  
   //state variable for submitting data to MongoDB
  const [regData, setRegData] = useState({
     studentId: "",
     scale1: "",
     scale2: "",
     scale3: "",
     comment1: "",
     comment2: "",
     comment3: "",
     score: "",
  });


//Uses Axios library to post JSON info from submitScoresheet to MongoDB server. 
  const handleSubmit = e => {
     //Stops page from refreshing
     e.preventDefault();
     axios.post(`http://localhost:5001/scoresheets/add`, regData)
     .then(res =>console.log(res.data))
     setRegData({...regData,studentId: "", score: "", comment1:"", comment2: "", comment3:"", scale1:"", scale2:"", scale3:""});
     setSuccess(true);
  };

const [posts, setPost] = useState([]);

useEffect(() => {
    axios.get('http://localhost:5001/studentregistration/').then((response) => {setPost(response.data); });
   },
   []);

    return (

       <Container>
        <Row style={{paddingLeft: "200px"}}>
        <div className= "scoresheet"  style={{width:"1000px"}}> 
           <Form onSubmit={handleSubmit}>
              <h3>Scoresheet</h3>
              <h4>District 2 - Band</h4>

            <Form.Group className="mb-3" controlId='Student'>
               <Form.Label>
                  <Form.Select className='form-select form-select-md mb-3' 
                  value = {regData.studentId}
                  onChange={(e) => setRegData({...regData, studentId: e.target.value})}>
                     <option vale = "">-</option>
                     {posts.map((post)=> <option key={post._id} value = {post._id}>{post.firstName + " " + post.lastName}</option>)}
                  </Form.Select>
              </Form.Label>
            </Form.Group>

            <FormControl id="margin-none">
               <FormLabel value={regData.scale1}
                  onChange={(e) => setRegData({...regData, scale1: e.target.value})}>
                  <p>Scale 1</p>
                  <RadioGroup row id="margin-none">
                     <FormControlLabel margin ="none" id="margin-none" value="1" control={<Radio/> } label= "1" labelPlacement='bottom'/>
                     <FormControlLabel margin ="none" id="margin-none" value="1.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="2" control={<Radio/> } label= "2" labelPlacement='bottom'/>
                     <FormControlLabel value="2.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="3" control={<Radio/> } label= "3" labelPlacement='bottom'/>
                     <FormControlLabel value="3.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="4" control={<Radio/> } label= "4" labelPlacement='bottom'/>
                     <FormControlLabel value="4.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="5" control={<Radio/> } label= "5" labelPlacement='bottom'/>
                     <FormControlLabel value="5.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="6" control={<Radio/> } label= "6" labelPlacement='bottom'/>
                     <FormControlLabel value="6.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="7" control={<Radio/> } label= "7" labelPlacement='bottom'/>
                     <FormControlLabel value="7.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="8" control={<Radio/> } label= "8" labelPlacement='bottom'/>
                     <FormControlLabel value="8.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="9" control={<Radio/> } label= "9" labelPlacement='bottom'/>
                     <FormControlLabel value="9.5" control={<Radio/> } label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="10" control={<Radio/> } label= "10" labelPlacement='bottom'/>
                  </RadioGroup>
               </FormLabel>
            </FormControl>

            <FormControl>
               <FormLabel value={regData.scale2}
                  onChange={(e) => setRegData({...regData, scale2: e.target.value})}>
                  <p>Scale 2</p>
                  <RadioGroup row>
                     <FormControlLabel value="1" control={<Radio/>} label= "1" labelPlacement='bottom'/>
                     <FormControlLabel value="1.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="2" control={<Radio/>} label= "2" labelPlacement='bottom'/>
                     <FormControlLabel value="2.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="3" control={<Radio/>} label= "3" labelPlacement='bottom'/>
                     <FormControlLabel value="3.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="4" control={<Radio/>} label= "4" labelPlacement='bottom'/>
                     <FormControlLabel value="4.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="5" control={<Radio/>} label= "5" labelPlacement='bottom'/>
                     <FormControlLabel value="5.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="6" control={<Radio/>} label= "6" labelPlacement='bottom'/>
                     <FormControlLabel value="6.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="7" control={<Radio/>} label= "7" labelPlacement='bottom'/>
                     <FormControlLabel value="7.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="8" control={<Radio/>} label= "8" labelPlacement='bottom'/>
                     <FormControlLabel value="8.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="9" control={<Radio/>} label= "9" labelPlacement='bottom'/>
                     <FormControlLabel value="9.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="10" control={<Radio/>} label= "10" labelPlacement='bottom'/>
                  </RadioGroup>
               </FormLabel>
            </FormControl>

            <FormControl>
               <FormLabel value={regData.scale3}
                  onChange={(e) => setRegData({...regData, scale3: e.target.value})}>
                  <p>Scale 3</p>
                  <RadioGroup row>
                     <FormControlLabel value="1" control={<Radio/>} label= "1" labelPlacement='bottom'/>
                     <FormControlLabel value="1.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="2" control={<Radio/>} label= "2" labelPlacement='bottom'/>
                     <FormControlLabel value="2.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="3" control={<Radio/>} label= "3" labelPlacement='bottom'/>
                     <FormControlLabel value="3.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="4" control={<Radio/>} label= "4" labelPlacement='bottom'/>
                     <FormControlLabel value="4.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="5" control={<Radio/>} label= "5" labelPlacement='bottom'/>
                     <FormControlLabel value="5.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="6" control={<Radio/>} label= "6" labelPlacement='bottom'/>
                     <FormControlLabel value="6.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="7" control={<Radio/>} label= "7" labelPlacement='bottom'/>
                     <FormControlLabel value="7.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="8" control={<Radio/>} label= "8" labelPlacement='bottom'/>
                     <FormControlLabel value="8.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="9" control={<Radio/>} label= "9" labelPlacement='bottom'/>
                     <FormControlLabel value="9.5" control={<Radio/>} label= "" labelPlacement='bottom'/>
                     <FormControlLabel value="10" control={<Radio/>} label= "10" labelPlacement='bottom'/>
                  </RadioGroup>
               </FormLabel>
            </FormControl>
          
           
            {/* Comment #1 */}
            <Form.Group className="mb-3" controlId='scoresheet.Comment1'>
                <Form.Label>Comment 1:</Form.Label>
                <Form.Control 
                //as ="textarea"
                onChange={(e) => setRegData({...regData, comment1: e.target.value})} 
                value={regData.comment1} 
                type ="String" 
                />
            </Form.Group>

             {/* Comment #2 */}
             <Form.Group className="mb-3" controlId='scoresheet.Comment2'>
                <Form.Label>Comment 2:</Form.Label>
                <Form.Control 
                //as ="textarea"
                value={regData.comment2} 
                onChange={(e) => setRegData({...regData, comment2: e.target.value})} 
                type ="String" 
                />
            </Form.Group>

            {/* Comment #3 */}
            <Form.Group className="mb-3" controlId='scoresheet.Comment3'>
                <Form.Label>Comment 3:</Form.Label>
                <Form.Control 
               // as ="textarea"
                value={regData.comment3} 
                onChange={(e) => setRegData({...regData, comment3: e.target.value})} 
                type ="String" />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Score</Form.Label>
                <Form.Control 
                type="float" 
                placeholder="i.e 87.5"
                value={regData.score} 
                onChange={(e) => setRegData({...regData, score: e.target.value})} 
                />
            </Form.Group>

            {/*Submit button*/}
            <Button variant="primary" type = "submit">Submit</Button>

           </Form>
           {success && <p style={{color: "green"}}>{message}{clearMessage()}</p>}
    
        </div>

      </Row>
   </Container>
    );
  }
  export default Scoresheet; 