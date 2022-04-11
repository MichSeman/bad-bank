import React from 'react'
import {Card, Button } from 'react-bootstrap'
import img5 from '../assets/img5.jpg'
import {AddTransaction} from './AddTransaction'
import {Balance} from './Balance'
import { GlobalProvider } from '../context/GlobalState'
import { IncomeExpenses } from './IncomeExpenses'
// import TransactionList from './TransactionList'

 const Deposit = () => {

    return (

      <GlobalProvider>
        <header>
        <br/>
        <br/>
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Img variant="top" 
                  src={img5}
                  className='img-thumbnail'
                  alt='...'
                  style={{ maxWidth: '24rem' }} />
             {/* src="Bank" alt="...logo" */}
  
            <Card.Body>
              <Card.Title>Deposit</Card.Title>
              <Card.Text>
               <h6>Deposit your money here!</h6>
               <div className='container'>
               <Balance />
               <IncomeExpenses />
              </div> 

                <AddTransaction />   
             

              </Card.Text>
           
            </Card.Body>
          </Card>
          
          </header>
          </GlobalProvider>
    )
  }
  export default Deposit;
