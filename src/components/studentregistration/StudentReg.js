import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import './StudentReg.css'
import axios from 'axios';

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
         <div style={{width:"500px"}}>
            <h2>Registered Students</h2>
            <ListGroup className = "studentList">
               {regStudents.map((student) => 
               <ListGroup.Item key={student._id} value={student._id}>
                  {student.firstName + " " + student.lastName + " - " + student.grade + " - " + student.school}
                  </ListGroup.Item>)}
            </ListGroup>
         </div>

         <div className= "studentregistration"  style={{width:"500px"}}> 
           <Form onSubmit={handleSubmit}>
            <h3>Student Registration</h3>
               
               <Row className="mb-3">
                  
                  {/*First Name*/}
                  <Form.Group as ={Col} controlId="firstName">
                     <Form.Label>First Name</Form.Label>
                     <Form.Control
                        onChange={(e) => setRegData({...regData, firstName: e.target.value})} 
                        value={regData.firstName}
                        type ="String" 
                        placeholder='First Name'>
                     </Form.Control>
                  </Form.Group>

                  {/*Last Name*/}
                  <Form.Group as={Col} controlId="lastName">
                     <Form.Label> Last Name</Form.Label>
                     <Form.Control 
                        onChange={(e) => setRegData({...regData, lastName: e.target.value})} 
                        value={regData.lastName} 
                        type ="String" 
                        placeholder='Last Name'
                        />
                  </Form.Group>
               
               </Row>

               {/*Grade*/}
               <Form.Group className="mb-3" controlId="Grade">
                  <Form.Label>Grade</Form.Label>
                  <Form.Select
                  value={regData.grade}
                  onChange={(e) => setRegData({...regData, grade: e.target.value})}
                  aria-label='"Default select example'>
                     <option value ="">-</option>
                     <option value ="6">6</option>
                     <option value ="7">7</option>
                     <option value ="8">8</option>
                     <option value ="9">9</option>
                     <option value ="10">10</option>
                     <option value ="11">11</option>
                     <option value ="12">12</option>
                  </Form.Select>
               </Form.Group>

            <Row className="mb-3">
            {/*Instrument*/}
            <Form.Group as ={Col} controlId="lastName">
               <Form.Label> Instrument</Form.Label>
               <Form.Control 
                  onChange={(e) => setRegData({...regData, instrument1: e.target.value})} 
                  value={regData.instrument1}  
                  type ="String" 
                  placeholder=' i.e instrument'
                  />
            </Form.Group>

            {/*Instrument*/}
            <Form.Group as ={Col} controlId="lastName">
               <Form.Label>Secondary Instrument</Form.Label>
               <Form.Control
               onChange={(e) => setRegData({...regData, instrument2: e.target.value})} 
               value={regData.instrument2}  
               type ="String" 
               placeholder='optional'
               />
            </Form.Group>
            </Row>

            {/*School*/}
            <Form.Group className="mb-3" controlId="lastName">
               <Form.Label> School</Form.Label>
               <Form.Control 
                  onChange={(e) => setRegData({...regData, school: e.target.value})} 
                  value={regData.school}   
                  type ="String" 
                  placeholder=''
                  />
            </Form.Group>
            
            {/*Ensembles 1*/}
             <Form.Group className="mb-3" controlId="Grade">
               <Form.Label>Ensemble 1</Form.Label>
               <Form.Select
               value={regData.ensemble1}
               onChange={(e) => setRegData({...regData, ensemble1: e.target.value})}
               aria-label='"Default slect example'>
                   <option value ="">-</option>
                   <option value ="Concert Band">Concert Band</option>
                   <option value ="Orchestra">Orchestra</option>
                   <option value ="Chorus">Chorus</option>
                   <option value ="Jazz Ensemble">Jazz Ensemble</option>
                   <option value ="Jazz Chorus">Jazz Chorus</option>
               </Form.Select>
            </Form.Group>

            {/*Ensembles 2*/}
            <Form.Group className="mb-3" controlId="Grade">
               <Form.Label>Ensemble 2 (Optional)</Form.Label>
               <Form.Select 
               value={regData.ensemble2}
               onChange={(e) => setRegData({...regData, ensemble2: e.target.value})}
               aria-label='"Default select example'>
                   <option value ="">-</option>
                   <option value ="Concert Band">Concert Band</option>
                   <option value ="Orchestra">Orchestra</option>
                   <option value ="Chorus">Chorus</option>
                   <option value ="Jazz Ensemble">Jazz Ensemble</option>
                   <option value ="Jazz Chorus">Jazz Chorus</option> 
                   </Form.Select>
            </Form.Group>

             {/*Ensemble Preference*/}
             <Form.Group className="mb-3" controlId="Grade">
               <Form.Label>Preference (Optional)</Form.Label>
               <Form.Select
               value={regData.preference}
               onChange={(e) => setRegData({...regData, preference: e.target.value})} 
               aria-label='"Default select example'>
                   <option value ="">-</option>
                   <option value ="Concert Band">Concert Band</option>
                   <option value ="Orchestra">Orchestra</option>
                   <option value ="Chorus">Chorus</option>
                   <option value ="Jazz Ensemble">Jazz Ensemble</option>
                   <option value ="Jazz Chorus">Jazz Chorus</option>
               </Form.Select>
            </Form.Group>

            {/*Submit button*/}
            <Button variant="primary" type = "submit">Submit</Button>
           </Form>
           {success && <h4 style={{color: "green"}}>{message}{clearMessage()}</h4>}
        </div>
      </Row>
   </Container>
    );
  }

  export default StudentReg; 