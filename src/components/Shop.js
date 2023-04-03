import { Link } from 'react-router-dom';
import React from 'react';
import { allGear } from './ShopComponents/Gear';
import { allTickets } from './ShopComponents/Tickets';

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
                            <li>All Tickets</li>
                        </Link>
                        <Link style={navStyle} to='/gear'>
                            <li>All Gear</li>
                        </Link>
                    </ul>
                </div>
                <div className='featuredSection'>
                    <div className='featuredTickets'>
                        <h2 id='featuredTicketsTitle'>Featured Tickets</h2>
                        <div id='nextGame'> 
                            <h3>Next Home Game</h3>
                            <div>{allTickets.indy429.date} vs. {allTickets.indy429.name}</div>
                        </div> 
                        <div className='bigMatchups'>
                            <h3>Big Matchups</h3>
                            <div>{allTickets.car505.date} vs. {allTickets.car505.name}</div>
                            <div>{allTickets.aus512.date} vs. {allTickets.aus512.name}</div>
                        </div>
                    </div>
                    <div className='featuredGear'>
                        <h2 id='featuredGearTitle'>Featured Gear</h2>
                        <div>{allGear.jerseys.home.name}: ${allGear.jerseys.home.price}</div>
                        <div>{allGear.apparel.hat.name}: ${allGear.apparel.hat.price}</div>
                        <div>{allGear.discs.game.name}: ${allGear.discs.game.price}</div>
                    </div>
                    <div className='purchaseAUDLTV'>
                        <div>Can't Come to a Game? Watch live on AUDL.tv</div>
                        <div id='audlTVLink'>AUDL.tv Link</div>
                    </div>
                </div>
            </div>
    )
}

export default Shop;
export { navStyle };