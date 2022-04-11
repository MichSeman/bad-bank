import React, { Component } from 'react'
import {Navbar, Nav, Container,} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import logo from '../assets/bank.png';
// import RegistrationForm from './RegistrationForm';
import Form from './Form';
import Withdraw2 from './Withdraw2'

export default class NavbarComp extends Component {
  render() {
    return (
       <Router>
      <div>
          <Navbar bg="warning" expand="lg">         
            <Container>
            <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <br/>
          </Navbar.Brand>
            <Navbar.Brand href="#home">Bad Bank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/createAccount"}>Create Account</Nav.Link>
                <Nav.Link as={Link} to={"/deposit"}>Deposit</Nav.Link>
                <Nav.Link as={Link} to={"/withdraw"}>Withdraw</Nav.Link>
                <Nav.Link as={Link} to={"/alldata"}>AllData</Nav.Link>
                {/* <Nav.Link as={Link} to={"/registrationform"}>RegistrationForm</Nav.Link> */}
                <Nav.Link as={Link} to={"/form"}>Form</Nav.Link>
                <Nav.Link as={Link} to={"/withdraw2"}>Withdraw2</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
 {/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home"> 
          <Home />
        </Route>
          <Route path="/createAccount">
            <Form />
          </Route>
          <Route path="/Deposit">
            <Deposit />
          </Route>
            <Route path="/withdraw">
            <Withdraw />
          </Route>
          <Route path="/allData">
            <AllData />
          </Route>
          <Route path="/form">
            <Form />
          </Route> 
          <Route path="/withdraw2">
            <Withdraw2 />
          </Route> 
          {/* <Route path="/registrationform">
            <RegistrationForm /> 
            
          </Route>  */}
        </Switch>
      </div>
      </Router>
    )
  }
}

