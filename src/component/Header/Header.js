import React from 'react';
import { Button, FormControl, InputGroup, Jumbotron, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import './Header.css';
import logo from '../../logos/Group 1329.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='container'>
            <Navbar bg="transparent" expand="lg">
                <Navbar>
                    <Link to='/'><img className="logo" src={logo} alt="" /></Link>
                </Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="#">Donation</Link></Nav.Link>
                        <Nav.Link><Link to="#">Event</Link></Nav.Link>
                        <Nav.Link><Link to="#">Blog</Link></Nav.Link>
                        <Nav.Link><Link className="nav-register" to="/register">Register</Link></Nav.Link>
                        <Nav.Link><Link className='nav-admin' to='/admin'>Admin</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
        </div>
    );
};

export default Header;