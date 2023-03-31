const Cart = (props) => {
    console.log(props.cart)
    return (
        <div>
            {props.cart.map(item => {
                return (
                    <div key={item.id} className='cartItem'>{item.name}</div>
                )
            })}
        </div>
    )
}

export default Cart;