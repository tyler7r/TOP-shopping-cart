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
    return (
        <BrowserRouter>
            <div className='App'>
                <Nav cart={cart} />
                <Routes>
                    <Route path='/' element={<Home addItem={setCart} />} />
                    <Route path='/shop' element={<Shop addItem={setCart}/>} />
                    <Route path='/cart' element={<Cart cart={cart} addItem={setCart}/>} />
                    <Route path='/tickets' element={<Tickets addItem={setCart}/>} />
                    <Route path='/gear' element={<Gear addItem={setCart}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;