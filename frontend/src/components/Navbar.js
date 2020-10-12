import React from 'react'
import { Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <div>
           <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#home" style={NavBrandStyle} >Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link style={NavLinkStyle} to="/">Home</Link>
                            <Link style={NavLinkStyle} to="/blog">Blog</Link>
                   
                        </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


const NavBrandStyle = {
    fontSize: '34px',
    marginLeft: '50px'
}

const NavLinkStyle = {
    fontSize: '20px',
    marginRight: '10px',
    marginTop: '8px',
    color: 'white',
    textDecoration: 'none'
}

export default NavbarComponent
