import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container, Button } from 'react-bootstrap';
import './Announcecard.css'
import { Route } from 'react-router-dom';

function Announcecard() {
    return (
        <Container className='annoContainer'>
        <div> 
            <Card className='annoCard'>
                <h3 className='announcements'>Announcements</h3>
                <Card.Body >
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                       <p>This is some place holder text</p>
                    </Card.Text>
                    <Button>Create Post</Button>
                </Card.Body>
               
            </Card>
        </div>
        </Container>
    );
  }

  export default Announcecard; 