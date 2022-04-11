import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import img2 from '../assets/img2.jpg'

 export default class CreateAccount extends Component {
  
  render() {
    return (
      <header>
      <br/>
      <br/>

        <Card border="info" style={{ width: '18rem' }}>
          <Card.Img variant="top" 
                src={img2}
                className='img-thumbnail'
                alt='...'
                style={{ maxWidth: '24rem' }} />
            <Card.Body>
            <Card.Title>Create Account</Card.Title>
            <Card.Text>
              Create your account or login here to start banking.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        
        </header>
  
      
    )
  }
}  
