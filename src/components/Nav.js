import React, { useState } from 'react';
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
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/cart'>
                    <li>Cart: {props.cart.length}</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;