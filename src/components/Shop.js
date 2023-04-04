import { Link } from 'react-router-dom';
import React from 'react';
import { allGear } from './ShopComponents/Gear';
import { allTickets } from './ShopComponents/Tickets';
import { Size } from './ShopComponents/Gear';

const navStyle = {
    color: '#2f1147',
    textDecoration: 'none',
    listStyle: 'none',
    width: 'fit-content',
    display: 'flex',
} 

const Shop = (props) => {
    return (
            <div className='content'>
                <div>
                    <ul className='shop-nav'>
                        <Link style={navStyle} to='/tickets'>
                            <li className='shopLink'>Shop All Tickets</li>
                        </Link>
                        <Link style={navStyle} to='/gear'>
                            <li className='shopLink'>Shop All Gear</li>
                        </Link>
                    </ul>
                </div>
                <div className='featuredSection'>
                    <div className='featuredTickets'>
                        <h2 id='featuredTicketTitle'>Featured Tickets</h2>
                        <div id='nextGame'> 
                            <h3 className='featuredTicketTitle'>Next Home Game</h3>
                            <Featured addItem={props.addItem} increment={props.increment} decrement={props.decrement} item={allTickets.indy429} />
                        </div>
                        <div className='bigMatchups'>
                            <h3 className='featuredTicketTitle'>Big Matchups</h3>
                            <div id='bigMatchups'>
                                <Featured addItem={props.addItem} increment={props.increment} decrement={props.decrement} item={allTickets.car505} />
                                <Featured addItem={props.addItem} increment={props.increment} decrement={props.decrement} item={allTickets.aus512} />
                            </div>
                        </div>
                    </div>
                    <div className='featuredGearSection'>
                        <h2 id='featuredGearTitle'>Featured Gear</h2>
                        <div className="featuredGear">
                            <Featured addItem={props.addItem} increment={props.increment} decrement={props.decrement} item={allGear.jerseys.home} />
                            <Featured addItem={props.addItem} increment={props.increment} decrement={props.decrement} item={allGear.apparel.hat} />
                            <Featured addItem={props.addItem} increment={props.increment} decrement={props.decrement} item={allGear.discs.game} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

const Featured = (props) => {
    if (props.item.size !== undefined) {
        return (
            <div className='shopItem'>
                <img className='shopImg' src={props.item.img} alt={props.item.id}/>
                <div className='shopItemDivider'> </div>
                <div className='itemName'>{props.item.name}</div>
                <Size item={props.item} />
                <div className='quantity'>
                    <button onClick={() => {props.decrement(props.item)}} className='decrement'>-</button>
                    <input className='quantityInput' type='text' placeholder="0" id={props.item.id} name={props.item.id} />
                    <button onClick={() => {props.increment(props.item)}} className='increment'>+</button>
                </div>
                <div className='itemPrice'>${props.item.price}</div>
                <button onClick={() => {props.addItem(props.item)}} className='addToCart'>Add to Cart</button>
            </div>
        )
    } else {
        return (
                <div className='shopItem'>
                    <img className='shopImg' src={props.item.img} alt={props.item.id}/>
                    <div className='shopItemDivider'> </div>
                    <div className='itemName'>
                        <div>{props.item.date} | {props.item.name}</div>
                    </div>
                    <div className='quantity'>
                        <button onClick={() => {props.decrement(props.item)}} className='decrement'>-</button>
                        <input className='quantityInput' type='text' placeholder="0" id={props.item.id} name={props.item.id} />
                        <button onClick={() => {props.increment(props.item)}} className='increment'>+</button>
                    </div>
                    <div className='itemPrice'>${props.item.price}</div>
                    <button onClick={() => {props.addItem(props.item)}} className='addToCart'>Add to Cart</button>
                </div>
            )
    }
}

export default Shop;
export { navStyle };