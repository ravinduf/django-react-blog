import React from 'react'
import NavbarComponent from '../components/Navbar'

const Layout = (props) => {
    return (
        <div>
            <NavbarComponent />
            {props.children}
        </div>
    )
}

export default Layout;
