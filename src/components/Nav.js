import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Nav = (props) => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <nav id='main-nav'>
            <img id='logo' alt='logo' src={logo}/>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li className='navLink'>Home</li>
                </Link>
                <Link style={navStyle} to='/tickets'>
                    <li className='navLink'>Tickets</li>
                </Link>
                <Link style = {navStyle} to='/gear'>
                    <li className='navLink'>Gear</li>
                </Link>
                <Link style={navStyle} to='/cart'>
                    <li className='navLink'>Cart: {props.cart.length}</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;