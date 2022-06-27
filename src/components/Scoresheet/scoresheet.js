import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Button } from 'react-bootstrap';
import  Radio  from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import './scoresheet.css'
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, TextField } from '@material-ui/core';
import { FormControlLabel, Input } from '@mui/material';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';

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

       <Container className='scoresheet'>
        <Row style={{paddingLeft: "200px"}}>
        <div className= "scoresheet"  style={{width:"1000px"}}> 
           <Form onSubmit={handleSubmit}>
              <h3>Scoresheet</h3>
              <h4>District 2 - Band</h4>

            {/*Student Selection */}
            <Row className='studentBox'>
            <FormControl className="mb-3">
               <InputLabel required>Student</InputLabel>
                  <Select
                  required
                  label = 'Student'
                  size = 'small'
                  value = {regData.studentId}
                  onChange={(e) => setRegData({...regData, studentId: e.target.value})}>
                     <MenuItem value = "">-</MenuItem>
                     {posts.map((post)=> <MenuItem key={post._id} value = {post._id}>{post.firstName + " " + post.lastName}</MenuItem>)}
                  </Select>
            </FormControl>
            </Row>

            {/*Scale 1 */}
            <FormControl className='mb-3'>
               <InputLabel required>Scale 1</InputLabel>
               <FormLabel 
                  value={regData.scale1}
                  onChange={(e) => setRegData({...regData, scale1: e.target.value})}>
                  
                  <RadioGroup row  required id="margin-none">
                     <FormControlLabel value="1" control={<Radio/> } label= "1" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="1.5" control={<Radio/> } label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="2" control={<Radio/> } label= "2" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="2.5" control={<Radio/> } label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="3" control={<Radio/> } label= "3" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="3.5" control={<Radio/> } label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="4" control={<Radio/> } label= "4" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="4.5" control={<Radio/> } label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="5" control={<Radio/> } label= "5" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="5.5" control={<Radio/> } label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="6" control={<Radio/> } label= "6" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="6.5" control={<Radio/> } label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="7" control={<Radio/> } label= "7" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="7.5" control={<Radio/> } label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="8" control={<Radio/> } label= "8" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="8.5" control={<Radio/> } label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="9" control={<Radio/> } label= "9" labelPlacement='bottom'/>
                     <FormControlLabel value="10" control={<Radio/> } label= "10" labelPlacement='bottom'/>
                  </RadioGroup>
               </FormLabel>
            </FormControl>

            {/*Scale 2 */}
            <FormControl className='mb-3'>
               <InputLabel required>Scale 2</InputLabel>
               <FormLabel value={regData.scale2}
                  onChange={(e) => setRegData({...regData, scale2: e.target.value})}>
                  <RadioGroup required row>
                     <FormControlLabel value="1" control={<Radio/>} label= "1" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="1.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="2" control={<Radio/>} label= "2" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="2.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="3" control={<Radio/>} label= "3" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="3.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="4" control={<Radio/>} label= "4" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="4.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="5" control={<Radio/>} label= "5" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="5.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="6" control={<Radio/>} label= "6" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="6.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="7" control={<Radio/>} label= "7" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="7.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="8" control={<Radio/>} label= "8" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="8.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="9" control={<Radio/>} label= "9" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="9.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="10" control={<Radio/>} label= "10" labelPlacement='bottom'/>
                  </RadioGroup>
               </FormLabel>
            </FormControl>

            {/*Scale 3 */}
            <FormControl className='mb-3'>
            <InputLabel required>Scale 3</InputLabel>
               <FormLabel value={regData.scale3}
                  onChange={(e) => setRegData({...regData, scale3: e.target.value})}>
                  <RadioGroup  required row>
                     <FormControlLabel value="1" control={<Radio/>} label= "1" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="1.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="2" control={<Radio/>} label= "2" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="2.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="3" control={<Radio/>} label= "3" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="3.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="4" control={<Radio/>} label= "4" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="4.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="5" control={<Radio/>} label= "5" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="5.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="6" control={<Radio/>} label= "6" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="6.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="7" control={<Radio/>} label= "7" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="7.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="8" control={<Radio/>} label= "8" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="8.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="9" control={<Radio/>} label= "9" labelPlacement='bottom'/>
                     {/* <FormControlLabel value="9.5" control={<Radio/>} label= "" labelPlacement='bottom'/> */}
                     <FormControlLabel value="10" control={<Radio/>} label= "10" labelPlacement='bottom'/>
                  </RadioGroup>
               </FormLabel>
            </FormControl>
          
           
            {/* Comment #1 */}
            <Row className='commentBox'>
            <FormControl className='mb-3'>
                <Box
                onChange={(e) => setRegData({...regData, comment1: e.target.value})} 
                value={regData.comment1} 
                type ="String">
                   <TextField variant='outlined' label="Comment 1" size= 'small' className='commentField'></TextField>
                </Box>
            </FormControl>
            </Row>

             {/* Comment #2 */}
             <Row className='commentBox'>
             <FormControl className="mb-3">
                <Box 
                //as ="textarea"
                value={regData.comment2} 
                onChange={(e) => setRegData({...regData, comment2: e.target.value})} 
                type ="String">
                   <TextField variant='outlined' label="Comment 2" size="small" className='commentField'/>
                </Box>
            </FormControl>
            </Row>

            {/* Comment #3 */}
            <Row className='commentBox'>
            <FormControl className='mb-3'>
                <Box 
                value={regData.comment3} 
                onChange={(e) => setRegData({...regData, comment3: e.target.value})} 
                type ="String">
                   <TextField variant='outlined' label="Comment 3" size='small' className='commentField'/>
               </Box>
            </FormControl>
            </Row>

            <Row className='commentBox'>
            <FormControl>
               <Box
                type="float" 
                placeholder="i.e 87.5"
                value={regData.score} 
                onChange={(e) => setRegData({...regData, score: e.target.value})}>
                   <TextField variant='outlined' label="Score" size='small' className='commentField'/>
               </Box>
            </FormControl>
            </Row>

            
            {/*Submit button*/}
            <Button variant="primary" type = "submit" className='submitScoresheet'>Submit</Button>
            

           </Form>
           {success && <p style={{color: "green"}}>{message}{clearMessage()}</p>}
    
        </div>

      </Row>
   </Container>
    );
  }
  export default Scoresheet; 