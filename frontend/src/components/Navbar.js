import React from 'react'
import { Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <div>
           <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#home" style={NavBrandStyle} >Blog-World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
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
    margin: ' 8px 20px 0px',
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline'
    }
}

export default NavbarComponent
