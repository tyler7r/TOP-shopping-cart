import React from 'react';

const Cart = (props) => {

    if (props.price === 0 || props.cart.length === 0) {
        return <div id='emptyCartMsg'>Your Cart is Empty</div>
    }

    return (
        <div>
            {props.cart.map(item => {
                if (item.size) {
                    return (
                        <div key={item.id + item.size} className='cartItem'>
                            <div>{item.name} {`(${item.size})`}: {item.quantity}</div>
                            <button onClick={() => {props.decrement(item, true)}} className='decrement'>-</button>
                            <input type='text' placeholder="Quantity" value={item.quantity} id={item.id}/>
                            <button onClick={() => {props.increment(item, true)}} className='increment'>+</button>
                            <div className='deleteButton' onClick={() => {props.delete(item)}}>Remove</div>
                        </div>
                    )
                } else {
                return (
                    <div key={item.id} className='cartItem'>
                        <div>{item.name}: {item.quantity}</div>
                        <button onClick={() => {props.decrement(item, true)}} className='decrement'>-</button>
                        <input type='text' placeholder="Quantity" value={item.quantity} id={item.id}/>
                        <button onClick={() => {props.increment(item, true)}} className='increment'>+</button>
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