import React, { Component } from 'react'
import { Card } from 'react-bootstrap' 
import img4 from '../assets/img4.jpg.pdf'


export default class Home extends Component {

  render() {
    return (
      <header>
      <br/>
      <br/>

        <Card border="info" style={{ width: '18rem' }}>
         <Card.Header>The Bad Bank</Card.Header>
          <Card.Img variant="top" 
                src={img4}
                className='img-thumbnail'
                alt='...'
                style={{ maxWidth: '44rem' }} />
          <Card.Body>
            <Card.Title>Welcome to the Bad Bank</Card.Title>
            <Card.Text>
              We're happy you're here! Use the links above to navigate the website. 
            </Card.Text>
           
          </Card.Body>
        </Card>
        
        </header>
    )
  }
}
