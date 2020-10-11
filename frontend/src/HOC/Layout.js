import React from 'react'
import Navbar from '../components/Navbar'

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.childeren}
        </div>
    )
}

export default Layout;
