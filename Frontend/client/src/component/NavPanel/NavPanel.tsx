import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavPanel() {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className='h1'>FamilySpace</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/chat">Chat</Nav.Link>
          <Nav.Link as={Link} to="/map">Map</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavPanel;