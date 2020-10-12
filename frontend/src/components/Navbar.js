import React from 'react'
import { Nav, Navbar, } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home" style={NavBrandStyle} >Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link style={NavLinkStyle} href="#home">Home</Nav.Link>
                            <Nav.Link style={NavLinkStyle} href="#link">Link</Nav.Link>
                   
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
    fontSize: '18px',
    marginRight: '10px'

}

export default NavbarComponent
