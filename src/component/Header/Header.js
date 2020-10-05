import React from 'react';
import { Button, FormControl, InputGroup, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../logos/Group 1329.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='container'>
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Donation</Nav.Link>
                        <Nav.Link href="#link">Event</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Register</Nav.Link>
                        <Nav.Link><Link to='/admin'>Admin</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
        </div>
    );
};

export default Header;