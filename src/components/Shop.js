import { Link } from 'react-router-dom';
import React from 'react';

const navStyle = {
    color: 'black',
    textDecoration: 'none'
}

const Shop = (props) => {
    return (
            <div>
                <div className='shop-nav'>
                    <ul>
                        <Link style={navStyle} to='/tickets'>
                            <li>Tickets</li>
                        </Link>
                        <Link style={navStyle} to='/gear'>
                            <li>Gear</li>
                        </Link>
                    </ul>
                </div>
            </div>
    )
}

export default Shop;
export { navStyle };