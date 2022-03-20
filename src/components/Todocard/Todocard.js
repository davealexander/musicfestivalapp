import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap';
import './Todocard.css'

function Todocard() {
    return (
        <Container style={{}}>
        <div> 
            <Card className='todoCard'>
                <h3 className='todos'>To-do List</h3>
                <Card.Body >
                    <Card.Title>Event#1</Card.Title>
                    <Card.Text>
                       <p>This is some place holder text</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </Container>
    );
  }

  export default Todocard; 