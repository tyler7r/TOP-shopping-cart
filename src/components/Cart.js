import React from 'react';

const Cart = (props) => {

    return (
        <div>
            {props.cart.map(item => {
                if (item.size) {
                    return (
                        <div key={item.id + item.size} className='cartItem'>{item.name} {`(${item.size})`}: {item.quantity}</div>
                    )
                } else {
                return (
                    <div key={item.id} className='cartItem'>{item.name}: {item.quantity}</div>
                )
                }
            })}
            <div className='totalPrice'>Total: {props.price}</div>
        </div>
    )
}

export default Cart;