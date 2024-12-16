import React from 'react'
import Logo from './Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Style.css';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/"> <img src={Logo} className="Logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft: '25%'}}>
                    <Nav className="me-auto">
                        <Nav.Link className="menu" href="/">Home</Nav.Link>
                        <Nav.Link className="menu" href="/shop">Shop</Nav.Link>
                        <Nav.Link className="menu" href="/aboutus">About us</Nav.Link>
                        <Nav.Link className="menu" href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <div>
        //     <div className="navbar">
        //         <img src={Logo} className="Logo"></img>
        //         <ul>
        //             <li><a href="#">Home</a></li>
        //             <li><a href="#">About</a></li>
        //             <li><a href="#">Shop</a></li>
        //             <li><a href="#">Contact Us</a></li>
        //         </ul>
        //     </div>
        //     <div className="content">
        //         <h1>CYCLONE BICYCLES</h1>
        //         <p>The lighter,Faster,Easier Way To Go Anywhere.</p>
        //         <button className='button'><span><font>Book A Test Ride</font></span></button>
        //     </div>
        // </div>
    )
}

export default Header
