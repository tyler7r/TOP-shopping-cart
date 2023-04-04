import React from 'react';

const Cart = (props) => {

    if (props.price === 0 || props.cart.length === 0) {
        return <div id='emptyCartMsg'>Your Cart is Empty</div>
    }

    return (
        <div className='content'>
            {props.cart.map(item => {
                if (item.size) {
                    return (
                        <div key={item.id + item.size} className='cartItem'>
                            <div>{item.name} {`(${item.size})`}</div>
                            <div className='quantity'>
                                <button onClick={() => {props.decrement(item, true)}} className='decrement'>-</button>
                                <div className='quantityValue' id={item.id}>{item.quantity}</div>
                                <button onClick={() => {props.increment(item, true)}} className='increment'>+</button>
                            </div>
                            <div className='deleteButton' onClick={() => {props.delete(item)}}>Remove</div>
                        </div>
                    )
                } else {
                return (
                    <div key={item.id} className='cartItem'>
                        <div>{item.name}</div>
                        <div className='quantity'>
                            <button onClick={() => {props.decrement(item, true)}} className='decrement'>-</button>
                            <div className='quantityValue' id={item.id}>{item.quantity}</div>
                            <button onClick={() => {props.increment(item, true)}} className='increment'>+</button>
                        </div>
                        <div className='deleteButton' onClick={() => {props.delete(item)}}>Remove</div>
                    </div>
                )
                }
            })}
            <div className='totalPrice'>Total: {props.price}</div>
        </div>
    )
}

export default Cart;