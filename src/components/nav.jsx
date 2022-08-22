import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";
import {Link} from "react-router-dom";


function Navigationbar() {
    return(
      <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
         <Div2>
            <img src="/img/logo.png" alt="log"></img>
             <h1> <span>BUILDIT</span> GROUP</h1>
          </Div2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nb">
          <Nav className="me-auto" >
            <Link to="/" className="link">Home</Link>
            <Link to="/" className="link">Services</Link>
            <Link to="/" className="link">About</Link>
            <Link to="/" className="link">Work</Link>
            <Link to="/info" className="link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigationbar; 


const Div2 = styled.div`
display: flex;
flex-direction: row;
margin-left: 10%;

img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 10px;
}

h1{
  font-size: 20px;
  color:white;
}

span {
    color: #DF7861;
    display: block;
}
`