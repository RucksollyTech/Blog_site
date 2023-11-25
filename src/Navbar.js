import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AppName from './AppName';

const NavBar = () => {
  return (
    <Navbar expand="lg" className='sticky-top bg-white'>
      <Container>
        <Navbar.Brand href="#home">
          <AppName />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#link">All Blogs</Nav.Link>
            <Nav.Link href="#link">Write blog</Nav.Link>
            <Nav.Link href="/about">Login</Nav.Link>
            <Nav.Link href="/about">Sign Up</Nav.Link>
            <NavDropdown title="Popular Bloggers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rucksolly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Chuks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Faith</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Denyefa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                View all ..
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

