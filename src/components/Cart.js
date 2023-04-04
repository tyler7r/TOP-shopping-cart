import React from 'react';
import { navStyle } from './Shop';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const revealCheckout = () => {
        const checkout = document.querySelector('.checkout');
        const cart = document.querySelector('.cart');
        const arrow = document.querySelector('.checkoutArrow');
        arrow.classList.add('hidden');
        checkout.classList.remove('hidden');
        cart.classList.remove('closed');
    }

    const hideCheckout = () => {
        const checkout = document.querySelector('.checkout');
        const cart = document.querySelector('.cart');
        const arrow = document.querySelector('.checkoutArrow');
        arrow.classList.remove('hidden');
        checkout.classList.add('hidden');
        cart.classList.add('closed');
    }

    console.log(props.cart);
    if (props.price === 0 || props.cart.length === 0) {
        return (
            <div className="content">
                <Link style={navStyle} to='/'>
                    <div className='backToShop'>Back to Home</div>
                </Link>
                <div className="emptyCartContent">
                    <div id='emptyCartMsg'>Your Cart is Coming Up Empty</div>
                    <video id='highlight1' width='600' height='300' autoPlay={true} controls='controls' src={require('../images/highlight1.mov')} />
                    <video id='highlight2' width='600' height='300' controls='controls' src={require('../images/highlight2.mov')} />
                    <div id='troll'>Just like these throws</div>
                </div>
            </div>
        )
    }

    return (
        <div className='content cart'>
            <div className='cartItems'>
                <Link style={navStyle} to='/'>
                    <div id='continueShopping'>Continue Shopping</div>
                </Link>
                {props.cart.map(item => {
                    if (item.size) {
                        return (
                            <div key={item.id + item.size} className='cartItem'>
                                <img className='cartImg' src={item.img} alt={item.id} />
                                <div className='cartDivider'> </div>
                                <div className="cartInfo">
                                    <div className='cartItemName'>{item.name}</div>
                                    <div className='cartGearSize'>Size: {item.size}</div>
                                    <div className='cartQuantity'>
                                        <button onClick={() => {props.decrement(item, true)}} className='decrement'>-</button>
                                        <div className='quantityValue' id={item.id}>{item.quantity}</div>
                                        <button onClick={() => {props.increment(item, true)}} className='increment'>+</button>
                                    </div>
                                    <div className='cartItemPrice'>${item.quantity * item.price} ({item.quantity} @ ${item.price})</div>
                                    <div className='deleteButton' onClick={() => {props.delete(item)}}>Remove</div>
                                </div>
                            </div>
                        )
                    } else if (item.type) {
                        return (
                            <div key={item.id} className='cartItem'>
                                <img className='cartImg' src={item.img} alt={item.id} />
                                <div className='cartDivider'> </div>
                                <div className="cartInfo">
                                    <div className='cartItemName'>{item.date} | {item.name}</div>
                                    <div className='cartTicketType'>{item.type}</div>
                                    <div className='cartQuantity'>
                                        <button onClick={() => {props.decrement(item, true)}} className='decrement'>-</button>
                                        <div className='quantityValue' id={item.id}>{item.quantity}</div>
                                        <button onClick={() => {props.increment(item, true)}} className='increment'>+</button>
                                    </div>
                                    <div className='cartItemPrice'>${item.quantity * item.price} ({item.quantity} @ ${item.price})</div>
                                    <div className='deleteButton' onClick={() => {props.delete(item)}}>Remove</div>
                                </div>
                            </div>
                        )
                    } else {
                    return (
                        <div key={item.id} className='cartItem'>
                            <img className='cartImg' src={item.img} alt={item.id} />
                            <div className='cartDivider'> </div>
                            <div className="cartInfo">
                                <div className='cartItemName'>{item.name}</div>
                                <div className='cartQuantity'>
                                    <button onClick={() => {props.decrement(item, true)}} className='decrement'>-</button>
                                    <div className='quantityValue' id={item.id}>{item.quantity}</div>
                                    <button onClick={() => {props.increment(item, true)}} className='increment'>+</button>
                                </div>
                                <div className='cartItemPrice'>${item.quantity * item.price} ({item.quantity} @ ${item.price})</div>
                                <div className='deleteButton' onClick={() => {props.delete(item)}}>Remove</div>
                            </div>
                        </div>
                    )
                    }
                })}
            </div>
            <div className="checkout">
                <div className='cartTotal'>
                    <div id='cartTitle'>CART</div>
                    <div onClick={() => {hideCheckout()}} className='hideCheckout hidden'>X</div>
                </div>
                <div id='cartDivider'> </div>
                <div className="promos">
                    <label for='promoCodes'>PROMO CODE</label>
                    <input id='promoCodes' type='text' placeholder='Nonexistent' />
                </div>
                <div className='totalPrice'>Total: ${props.price}</div>
                <div className='purchaseOptions'>
                    <div className='purchaseTitle'>We Proudly Accept:</div>
                    <img className='paymentLogo' id='americanExpress' src={require('../images/american-express.png')} alt='americanExpress' />
                    <img className='paymentLogo' id='mastercard' src={require('../images/mastercard.png')} alt='mastercard' />
                    <img className='paymentLogo' id='paypal' src={require('../images/paypal.png')} alt='paypal' />
                </div>
                <div id='checkoutBtn'>CHECKOUT</div>
            </div>
            <div onClick={() => {revealCheckout()}} className='checkoutArrow hidden'>CHECKOUT</div>
        </div>
    )
}

export default Cart;