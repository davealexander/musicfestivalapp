import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import './scoresheet.css'


function Scoresheet() {
    return (
        <Container>
        <Row style={{paddingLeft: "200px"}}>

        <div className= "scoresheet"  style={{width:"500px"}}> 
           <Form>
              <h3>Scoresheet</h3>
              <h4>District 2 - Band</h4>
              <h4>John Smith - Grade 10 - Saxophone</h4>

            {/*Scale 1  REFACTOR for */}
            <Form.Group className="mb-3" controlId="scale1">
               <Form.Label>Scale 1:</Form.Label>
               <br></br>
               <Form.Check inline label="1" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="1.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="2" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="2.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="3" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="3.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="4" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="4.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="5.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="6" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="6.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="7" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="7.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="8" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="8.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="9" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="9.5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="10" name='group1' type='radio' id='inline-radio-1'/>
            </Form.Group>

              {/*Scale 2  REFACTOR for */}
              <Form.Group className="mb-3" controlId="scale2">
               <Form.Label>Scale 2:</Form.Label>
               <br></br>
               <Form.Check inline label="1" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="1.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="2" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="2.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="3" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="3.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="4" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="4.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="5.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="6" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="6.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="7" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="7.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="8" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="8.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="9" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="9.5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="10" name='group2' type='radio' id='inline-radio-1'/>
            </Form.Group>

             {/*Scale 3  REFACTOR for */}
             <Form.Group className="mb-3" controlId="scale3">
               <Form.Label>Scale 3:</Form.Label>
               <br></br>
               <Form.Check inline label="1" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="1.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="2" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="2.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="3" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="3.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="4" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="4.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="5.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="6" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="6.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="7" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="7.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="8" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="8.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="9" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="9.5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check inline label="10" name='group3' type='radio' id='inline-radio-1'/>
            </Form.Group>
            
            {/* Comment #1 */}
            <Form.Group className="mb-3" controlId='scoresheet.Comment1'>
                <Form.Label>Comment 1:</Form.Label>
                <Form.Control as ="textarea"/>
            </Form.Group>
             {/* Comment #2 */}
             <Form.Group className="mb-3" controlId='scoresheet.Comment2'>
                <Form.Label>Comment 2:</Form.Label>
                <Form.Control as ="textarea"/>
            </Form.Group>
            {/* Comment #2 */}
            <Form.Group className="mb-3" controlId='scoresheet.Comment3'>
                <Form.Label>Comment 3:</Form.Label>
                <Form.Control as ="textarea"/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Score</Form.Label>
                <Form.Control type="number" placeholder="i.e 87.5"/>
            </Form.Group>





            

            {/*Submit button*/}
            <Button variant="primary" type = "submit">Submit</Button>
             {/*Submit button*/}
            <Button variant="secondary" type = "save" style={{marginLeft: '10px'}}>Save</Button>
         

           </Form>
        </div>
      </Row>
   </Container>
    );
  }

  export default Scoresheet; 