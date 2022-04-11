import React from 'react';
import {Card, Button } from 'react-bootstrap'
import img5 from '../assets/img5.jpg'

import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import  TransactionList  from './TransactionList';
import { AddTransaction } from './AddTransaction';

import { GlobalProvider } from '../context/GlobalState';

import '../App.css';

function Withdraw2() {
  return (
    <GlobalProvider>
           
        <br/>
        <br/>
          <Card border="info" style={{ width: '18rem' }}>
          <Card.Header>Withdraw</Card.Header>
            <Card.Img variant="top" 
                  src={img5}
                  className='img-thumbnail'
                  alt='...'
                  style={{ maxWidth: '24rem' }} />
             {/* src="Bank" alt="...logo" */}
           
            <Card.Body>
              <Card.Text>
               <h6>Make a quick withdraw that transfers in moments to your debit card!</h6>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>


      </Card.Text>
              {/* <button className="btn">Add transaction</button> */}
            </Card.Body>
          </Card>
          
    </GlobalProvider>
  );
}

export default Withdraw2;