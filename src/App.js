import React, { useState } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Tickets from './components/ShopComponents/tickets'
import Gear from './components/ShopComponents/gear'

const App = () => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        console.log(cart);
        let updatedCart = [...cart, item];
        setCart(updatedCart);
    }

    return (
        <BrowserRouter>
            <div className='App'>
                <Nav cart={cart} />
                <Routes>
                    <Route path='/' element={<Home addItem={addItem} />} />
                    <Route path='/shop' element={<Shop addItem={addItem}/>} />
                    <Route path='/cart' element={<Cart cart={cart} addItem={addItem}/>} />
                    <Route path='/tickets' element={<Tickets addItem={addItem}/>} />
                    <Route path='/gear' element={<Gear addItem={addItem}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;