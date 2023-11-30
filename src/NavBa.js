import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AppName from './AppName';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const NavBa = () => {
    const [lgShow, setLgShow] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <Navbar expand="lg" className='sticky-top bg-white'>
        <Container>
            <Navbar.Brand href="#home">
            <AppName />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to={"/about"} className='nav-link'>
                    About
                </Link>
                <Link to={"/all_blogs"} className='nav-link'>
                    All Blogs
                </Link>
                <button 
                    className='nav-link'
                    onClick={()=>setLgShow(!lgShow)}
                >
                    Write blog
                </button>
                <Link to={"/login"} className='nav-link'>
                    Login
                </Link>
                <Link to={"/sign_up"} className='nav-link'>
                    Sign Up
                </Link>
                <NavDropdown title="Popular Bloggers" id="basic-nav-dropdown">
                    
                    <Link to={"/profile"} className='text-dark dropdown-item'>
                        Rucksolly
                    </Link>
                    <Link to={"/profile"} className='text-dark dropdown-item'>
                        Chuks
                    </Link>
                    <Link to={"/profile"} className='text-dark dropdown-item'>
                        Denyefa
                    </Link>
                    <Link to={"/profile"} className='text-dark dropdown-item'>
                        Faith
                    </Link>
                    <NavDropdown.Divider />
                    <Link to={"/all_users"} className='text-dark dropdown-item'>
                        View all ..
                    </Link>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {isLoggedIn ? "Write a blog" : "Please log in"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { !isLoggedIn && 
                    <div className="loginImg">
                        <img src="/Images/login.gif" alt="Login gif" />
                    </div>
                }
                {
                    isLoggedIn &&
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicAbout">
                            <textarea className='form-control' cols="30" rows="2" placeholder="Write blog"></textarea>
                        </Form.Group>
                        <div>
                            <button className='btn btn-primary'>
                                Post
                            </button>
                        </div>
                    </Form>
                }
            </Modal.Body>
        </Modal>
    </Navbar>
  )
}

export default NavBa

