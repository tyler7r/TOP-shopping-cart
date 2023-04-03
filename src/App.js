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
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const cartQuantity = () => {
            let copy = [...cart]
            const num = copy.reduce((total, currentItem) => total + currentItem.quantity, 0);
            setQuantity(num);
        }

        const price = () => {
            let copy = [...cart];
            const num = copy.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
            setPrice(num);
        }

        cartQuantity();
        price();
    }, [cart])

    const addItem = (item) => {
        const input = document.querySelector(`#${item.id}`);
        if (isNaN(parseInt(input.value)) === true) return;
        let find = cart.find((obj) => obj.id === item.id);
        if (item.size) {
            sizeHandler(item);
        } else {
            if (find !== undefined) {
                const addedValue = () => {
                    return parseInt(item.quantity) + parseInt(input.value);
                }
                console.log(addedValue());
                item.quantity = addedValue();
                let copy = [...cart];
                setCart(copy);
            } else {
                item.quantity += parseInt(input.value);
                let copy = [...cart, item];
                setCart(copy);
            }
        }
        input.value = '';
    }

    const sizeHandler = (item) => {
        let itemCopy = {...item};
        const input = document.querySelector(`#${item.id}`);
        let sizeMatch = cart.find(obj => obj.id === itemCopy.id && obj.size === itemCopy.size)
        console.log(sizeMatch);
        if (sizeMatch !== undefined) {
            let copy = [...cart];
            let indexMatch = copy.findIndex(obj => obj.id === itemCopy.id && obj.size === itemCopy.size);
            copy[indexMatch].quantity += parseInt(input.value);
            setCart(copy);
        } else {
            itemCopy.quantity += parseInt(input.value);
            console.log()
            let copy = [...cart, itemCopy]
            setCart(copy);
        }
        item.size = '';
        input.value = '';
    }

    const increment = (item, cartView = false) => {
        const input = document.querySelector(`#${item.id}`);
        input.value++;
        if (cartView === true) {
            let copy = [...cart];
            item.quantity = input.value;
            setCart(copy);
        }
    }

    const decrement = (item, cartView = false) => {
        const input = document.querySelector(`#${item.id}`);
        if (input.value === '0') return
        input.value--;
        if (cartView === true) {
            if (input.value === '0') {
                deleteItem(item);
            } else {
                let copy = [...cart];
                item.quantity = input.value;
                setCart(copy);
            }
        }
    }

    const deleteItem = (item) => {
        let copy = [...cart];
        if (item.size) {
            let find = copy.findIndex(obj => obj.id === item.id && obj.size === item.size);
            item.quantity = 0;
            copy.splice(find, 1);
            setCart(copy);  
        } else {
            let find = copy.findIndex(obj => obj.id === item.id);
            item.quantity = 0;
            copy.splice(find, 1);
            setCart(copy);
        }
    }

    return (
        <BrowserRouter>
            <div className='App'>
                <Nav quantity={quantity} cart={cart} />
                <Routes>
                    <Route path='/' element={<Home addItem={addItem} />} />
                    <Route path='/shop' element={<Shop addItem={addItem}/>} />
                    <Route path='/cart' element={<Cart delete={deleteItem} price={price} cart={cart} increment={increment} decrement={decrement} addItem={addItem}/>} />
                    <Route path='/tickets' element={<Tickets increment={increment} decrement={decrement} addItem={addItem}/>} />
                    <Route path='/gear' element={<Gear increment={increment} decrement={decrement} addItem={addItem}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;