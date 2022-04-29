import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Button } from 'react-bootstrap';
import './scoresheet.css'
import axios from 'axios';

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

            {/*Scale 1  REFACTOR for */}
            <Form.Group className="mb-3" controlId="scale1">
               <Form.Label>Scale 1:</Form.Label>
               <div 
               value={regData.scale1}
               onChange={(e) => setRegData({...regData, scale1: e.target.value})}>
               <Form.Check value="1" inline label="1" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="1.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="2"inline label="2" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="2.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="3"inline label="3" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="3.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="4"inline label="4" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="4.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="5"inline label="5" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="5.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="6"inline label="6" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="6.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="7"inline label="7" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="7.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="8"inline label="8" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="8.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="9"inline label="9" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="9.5"inline label="" name='group1' type='radio' id='inline-radio-1'/>
               <Form.Check value="10"inline label="10" name='group1' type='radio' id='inline-radio-1'/>
               </div>
            </Form.Group>

              {/*Scale 2  REFACTOR for */}
            <Form.Group className="mb-3" controlId="scale2">
               <Form.Label>Scale 2:</Form.Label>
               <div 
               value={regData.scale2}
               onChange={(e) => setRegData({...regData, scale2: e.target.value})}>
               <Form.Check value="1" inline label="1" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="1.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="2"inline label="2" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="2.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="3"inline label="3" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="3.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="4"inline label="4" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="4.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="5"inline label="5" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="5.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="6"inline label="6" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="6.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="7"inline label="7" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="7.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="8"inline label="8" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="8.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="9"inline label="9" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="9.5"inline label="" name='group2' type='radio' id='inline-radio-1'/>
               <Form.Check value="10"inline label="10" name='group2' type='radio' id='inline-radio-1'/>
              </div>
            </Form.Group>

             {/*Scale 3  REFACTOR for */}
            <Form.Group className="mb-3" controlId="scale3">
               <Form.Label>Scale 3:</Form.Label>
               <div 
               value={regData.scale3}
               onChange={(e) => setRegData({...regData, scale3: e.target.value})}>
               <Form.Check value="1" inline label="1" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="1.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="2"inline label="2" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="2.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="3"inline label="3" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="3.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="4"inline label="4" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="4.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="5"inline label="5" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="5.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="6"inline label="6" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="6.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="7"inline label="7" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="7.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="8"inline label="8" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="8.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="9"inline label="9" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="9.5"inline label="" name='group3' type='radio' id='inline-radio-1'/>
               <Form.Check value="10"inline label="10" name='group3' type='radio' id='inline-radio-1'/>
               </div>
            </Form.Group>
            
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
            {/* Comment #2 */}
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