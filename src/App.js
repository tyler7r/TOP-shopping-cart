import React, { useState } from 'react';
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

    const addItem = (item) => {
        let itemCopy = {...item};
        const input = document.querySelector(`#${item.id}`);
        let copy = [...cart];
        for (let i = 0; i < parseInt(input.value); i++) {
            copy.push(itemCopy);
        }
        setCart(copy);
        input.value = '';
        item.size = '';
        console.log(cart);
    }

    const increment = (item) => {
        const input = document.querySelector(`#${item.id}`);
        input.value++;
    }

    const decrement = (item) => {
        const input = document.querySelector(`#${item.id}`);
        if (input.value === '0') return
        input.value--;
    }

    return (
        <BrowserRouter>
            <div className='App'>
                <Nav cart={cart} />
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