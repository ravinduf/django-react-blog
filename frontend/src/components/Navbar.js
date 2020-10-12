import React from 'react'
import { Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {

    return (
        <div>
           <Navbar  bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#home" className="navBrandStyle" >Blog-World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto navLinks" >
                            <Link className="navLinkStyle"  to="/" >Home</Link>
                            <Link className="navLinkStyle"  to="/blog">Blog</Link>
                   
                        </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default NavbarComponent
