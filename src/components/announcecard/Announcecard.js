import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap';
import './Announcecard.css'

function Announcecard() {
    return (
        <Container>
        <div> 
            <Card className='annoCard'>
                <h3 className='announcements'>Announcements</h3>
                <Card.Body >
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                       <p>This is some place holder text</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </Container>
    );
  }

  export default Announcecard; 