import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;