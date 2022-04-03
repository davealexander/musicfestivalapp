import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import './StudentReg.css'


function StudentReg() {
    return (
        <Container>
        <Row style={{paddingLeft: "200px"}}>
        <div style={{width:"500px"}}>
            <h2>Registered Students</h2>
            <ListGroup className = "studentList">
               <ListGroup.Item className ="studentList">Student 1</ListGroup.Item>
               <ListGroup.Item className ="studentList">Student 2</ListGroup.Item>
               <ListGroup.Item className ="studentList">Student 3</ListGroup.Item>
               <ListGroup.Item className ="studentList">Student 4</ListGroup.Item>
               <ListGroup.Item className ="studentList">Student 5</ListGroup.Item>
            </ListGroup>
        </div>

        <div className= "studentregistration"  style={{width:"500px"}}> 
           <Form>
              <h3>Student Registration</h3>
              <Row className="mb-3">
            {/*First Name*/}
            <Form.Group as ={Col} controlId="firstName">
               <Form.Label> First Name</Form.Label>
               <Form.Control type ="String" placeholder='i.e John'/>
            </Form.Group>

            {/*Last Name*/}
            <Form.Group as={Col} controlId="lastName">
               <Form.Label> Last Name</Form.Label>
               <Form.Control type ="String" placeholder='i.e Smith'/>
            </Form.Group>
            </Row>

            {/*Grade*/}
            <Form.Group className="mb-3" controlId="Grade">
               <Form.Label>Grade</Form.Label>
               <Form.Select aria-label='"Default slect example'>
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
               <Form.Control type ="String" placeholder=' i.e instrument'/>
            </Form.Group>

            {/*Instrument*/}
            <Form.Group as ={Col} controlId="lastName">
               <Form.Label> Instrument 2</Form.Label>
               <Form.Control type ="String" placeholder='optional'/>
            </Form.Group>

            </Row>

            {/*School*/}
            <Form.Group className="mb-3" controlId="lastName">
               <Form.Label> School</Form.Label>
               <Form.Control type ="String" placeholder=''/>
            </Form.Group>
            
            {/*Ensembles 1*/}
             <Form.Group className="mb-3" controlId="Grade">
               <Form.Label>Ensemble 1</Form.Label>
               <Form.Select aria-label='"Default slect example'>
                   <option value ="Concert Band">Concert Band</option>
                   <option value ="Orchestra">Orchestra</option>
                   <option value ="Chorus">Chorus</option>
                   <option value ="Jazz Ensemble">Jazz Ensemble</option>
                   <option value ="Jazz Chorus">Jazz Chorus</option>
               </Form.Select>
            </Form.Group>

            {/*Ensembles 2*/}
            <Form.Group className="mb-3" controlId="Grade">
               <Form.Label>Ensemble 2</Form.Label>
               <Form.Select aria-label='"Default slect example'>
                   <option value ="Concert Band">Concert Band</option>
                   <option value ="Orchestra">Orchestra</option>
                   <option value ="Chorus">Chorus</option>
                   <option value ="Jazz Ensemble">Jazz Ensemble</option>
                   <option value ="Jazz Chorus">Jazz Chorus</option>
               </Form.Select>
            </Form.Group>

             {/*Ensemble Preference*/}
             <Form.Group className="mb-3" controlId="Grade">
               <Form.Label>Preference</Form.Label>
               <Form.Select aria-label='"Default slect example'>
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
        </div>
      </Row>
   </Container>
    );
  }

  export default StudentReg; 