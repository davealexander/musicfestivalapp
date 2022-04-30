import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Col, ListGroup } from 'react-bootstrap';
import './StudentReg.css'
import axios from 'axios';

//Material UI Themes
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';



//Fix submission error: A component is changing from controlled input to be uncontrolled

function StudentReg() {
   const [success, setSuccess]= useState(false);
   const [message, setMessage]= useState("Student Registered!"); 

   //function that clears the success message after 5 seconds
   function clearMessage(){
      setTimeout(() => setMessage(""), 5000);
      setTimeout(() => setSuccess(false), 5000);
      setTimeout(() => setMessage("Student Registered!"), 6000);
   }
   //useState for submitting data to database
   const [regData, setRegData] = useState({
      firstName: "",
      lastName: "",
      grade: "",
      instrument1: "",
      instrument2: "",
      school: "",
      ensemble1: "",
      ensemble2: "",
      preference: "",
   });

//Uses Axios library to post JSON info from StudentReg to MongoDB server. 
   const handleSubmit = e => {
      //Stops page from refreshing
      e.preventDefault();
      axios.post(`http://localhost:5001/studentregistration/add`, regData)
      .then(res =>console.log(res.data))
      setRegData({...regData, 
         firstName: "", lastName: "", 
         grade: "", instrument1:"",
         instrument2:"", school:"",
         ensemble1:"", ensemble2:"", 
         preference:""})
      setSuccess(true);
   }

   const [regStudents,setRegStudents] = useState([]);
   
   useEffect(() =>{
      axios.get('http://localhost:5001/studentregistration/').then((res) => {setRegStudents(res.data);});
   },
   []);

   return (

      <Container>
        <Row style={{paddingLeft: "200px"}}>
         <div style={{width:"500px", marginTop:"50px"}}>
            <h2 style={{marginBottom: "20px"}}>Registered Students</h2>
            <ListGroup className = "studentList">
               {regStudents.map((student) => 
               <ListGroup.Item style={{backgroundColor: "lightgray"}} key={student._id} value={student._id}>
                  {student.firstName + " " + student.lastName + " - " + student.grade + " - " + student.school}
                  </ListGroup.Item>)}
            </ListGroup>
         </div>

         <div className= "studentregistration"  style={{width:"500px"}}> 
           <Form onSubmit={handleSubmit}>
            <h2 style={{marginBottom: "20px"}}>Student Registration</h2>
               
               <Row className="mb-3">
                  
                  {/*First Name*/}
                  <Form.Group as ={Col} controlId="firstName">
                     <Box
                        onChange={(e) => setRegData({...regData, firstName: e.target.value})} 
                        value={regData.firstName}
                        type ="String">
                           <TextField required label="First Name" variant='outlined' className='textfield'/>
                     </Box>
                  </Form.Group>

                  {/*Last Name*/}
                  <Form.Group as={Col} controlId="lastName">
                     <Box 
                        onChange={(e) => setRegData({...regData, lastName: e.target.value})} 
                        value={regData.lastName} 
                        type ="String">
                           <TextField required label="Last Name" variant='outlined' className='textfield'/>
                     </Box>
                  </Form.Group>
               
               </Row>


               <Row className="mb-3">
               {/*Instrument*/}
               <Form.Group as ={Col}>
                  <Box 
                     onChange={(e) => setRegData({...regData, instrument1: e.target.value})} 
                     value={regData.instrument1}  
                     type ="String"> 
                        <TextField required label="Instrument" variant='outlined' className='textfield'/>
                     </Box>
               </Form.Group>

               {/*Instrument2*/}
               <Form.Group as ={Col}>
                  <Box
                  onChange={(e) => setRegData({...regData, instrument2: e.target.value})} 
                  value={regData.instrument2}  
                  type ="String">
                     <TextField label="Secondary Instrument" variant='outlined' className='textfield'/>
                  </Box>
               </Form.Group>
               </Row>

               <Row>

               {/*School*/}
               <FormControl style={{marginBottom: "20px"}}>
                  <Box
                     onChange={(e) => setRegData({...regData, school: e.target.value})} 
                     value={regData.school}   
                     type ="String"
                     >
                        <TextField required label="School" variant='outlined' style={{width:"500px"}}/>
                  </Box>
               </FormControl>
               </Row>
            
            <Row>
               {/*Grade*/}
               <FormControl style={{marginBottom: "20px"}} >
                     <InputLabel required>Grade</InputLabel>
                     <Select
                     required
                     value={regData.grade}
                     onChange={(e) => setRegData({...regData, grade: e.target.value})}
                     >
                        <MenuItem required value ={""}>-</MenuItem>
                        <MenuItem value ={6}>6</MenuItem>
                        <MenuItem value ={7}>7</MenuItem>
                        <MenuItem value ={8}>8</MenuItem>
                        <MenuItem value ={9}>9</MenuItem>
                        <MenuItem value ={1}>10</MenuItem>
                        <MenuItem value ={1}>11</MenuItem>
                        <MenuItem value ={1}>12</MenuItem>
                     </Select>
                  </FormControl>
               
               {/*Ensembles 1*/}
               <FormControl style={{marginBottom: "20px"}}>
                  <InputLabel required>Ensemble 1</InputLabel>
                  <Select
                  required
                  value={regData.ensemble1}
                  onChange={(e) => setRegData({...regData, ensemble1: e.target.value})}
                  aria-label='"Default slect example'>
                     <MenuItem value ="">-</MenuItem>
                     <MenuItem value ="Concert Band">Concert Band</MenuItem>
                     <MenuItem value ="Orchestra">Orchestra</MenuItem>
                     <MenuItem value ="Chorus">Chorus</MenuItem>
                     <MenuItem value ="Jazz Ensemble">Jazz Ensemble</MenuItem>
                     <MenuItem value ="Jazz Chorus">Jazz Chorus</MenuItem>
                  </Select>
               </FormControl>

            </Row>

            <Row>
               {/*Ensembles 2*/}
               <FormControl style={{marginBottom: "20px"}}>
                  <InputLabel >Ensemble 2 (Optional)</InputLabel>
                  <Select 
                  value={regData.ensemble2}
                  onChange={(e) => setRegData({...regData, ensemble2: e.target.value})}
                  aria-label='"Default select example'>
                     <MenuItem value ="">-</MenuItem>
                     <MenuItem value ="Concert Band">Concert Band</MenuItem>
                     <MenuItem value ="Orchestra">Orchestra</MenuItem>
                     <MenuItem value ="Chorus">Chorus</MenuItem>
                     <MenuItem value ="Jazz Ensemble">Jazz Ensemble</MenuItem>
                     <MenuItem value ="Jazz Chorus">Jazz Chorus</MenuItem> 
                     </Select>
               </FormControl>

               {/*Ensemble Preference*/}
               <FormControl style={{marginBottom: "20px"}}>
                  <InputLabel>Preference (Optional)</InputLabel>
                  <Select
                  value={regData.preference}
                  onChange={(e) => setRegData({...regData, preference: e.target.value})} 
                  aria-label='"Default select example'>
                     <MenuItem value ="">-</MenuItem>
                     <MenuItem value ="Concert Band">Concert Band</MenuItem>
                     <MenuItem value ="Orchestra">Orchestra</MenuItem>
                     <MenuItem value ="Chorus">Chorus</MenuItem>
                     <MenuItem value ="Jazz Ensemble">Jazz Ensemble</MenuItem>
                     <MenuItem value ="Jazz Chorus">Jazz Chorus</MenuItem>
                  </Select>
               </FormControl>

               </Row>

            {/*Submit button*/}
            <Button variant="contained" type = "submit">Submit</Button>
           </Form>
           {success && <h4 style={{color: "green"}}>{message}{clearMessage()}</h4>}
        </div>
      </Row>
   </Container>
    );
  }

  export default StudentReg; 