import React, { useState, useEffect } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Tickets from './components/ShopComponents/Tickets'
import Gear from './components/ShopComponents/Gear';

const App = () => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addItem = (item) => {
        const input = document.querySelector(`#${item.id}`);
        if (isNaN(parseInt(input.value)) === true) return;
        let find = cart.find((obj) => obj.id === item.id);
        if (find !== undefined) {
            item.quantity += parseInt(input.value);
            let copy = [...cart];
            setCart(copy);
        } else {
            item.quantity += parseInt(input.value);
            let copy = [...cart, item];
            setCart(copy);
        }
    }

    useEffect(() => {
        const cartQuantity = () => {
            let copy = [...cart]
            const num = copy.reduce((total, currentItem) => total + currentItem.quantity, 0);
            setQuantity(num);
        }

        cartQuantity();
    }, [cart])

    const increment = (item) => {
        const input = document.querySelector(`#${item.id}`);
        input.value++;
    }

    const decrement = (item) => {
        const input = document.querySelector(`#${item.id}`);
        if (input.value === '0') return
        input.value--;
    }

    // const handleChange = (item) => {
        
    // }

    return (
        <BrowserRouter>
            <div className='App'>
                <Nav cart={cart} quantity={quantity} />
                <Routes>
                    <Route path='/' element={<Home addItem={addItem} />} />
                    <Route path='/shop' element={<Shop addItem={addItem}/>} />
                    <Route path='/cart' element={<Cart cart={cart} increment={increment} decrement={decrement} addItem={addItem}/>} />
                    <Route path='/tickets' element={<Tickets increment={increment} decrement={decrement} addItem={addItem}/>} />
                    <Route path='/gear' element={<Gear increment={increment} decrement={decrement} addItem={addItem}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;