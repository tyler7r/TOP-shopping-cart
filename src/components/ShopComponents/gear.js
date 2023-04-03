import React from "react"
import { Link } from "react-router-dom"
import { navStyle } from "../Shop"

const allGear = {
    jerseys: {
        home: {
            name: '2023 Home Kit',
            color: 'purple',
            price: 60,
            number: '',
            size: '',
            quantity: 0,
            fees: 0,
            id: 'homekit',
        },
        away: {
            name: '2023 Away Kit',
            color: 'white',
            price: 60,
            number: '',
            size: '',
            quantity: 0,
            fees: 0,
            id: 'awaykit'
        }
    },
    apparel: {
        sunhoodie: {
            name: 'ATL Hustle Purple Sun Hoodie',
            color: 'purple',
            size: '',
            price: 50,
            saleprice: 39,
            quantity: 0,
            id: 'sunhoodie',
        },
        tshirts: {
            purple: {
                name: 'ATL Hustle Purple T-Shirt',
                color: 'purple',
                size: '',
                price: 20,
                quantity: 0,
                id: 'purplet'
            },
            black: {
                name: 'ATL Hustle Black T-Shirt',
                color: 'black',
                size: '',
                price: 20,
                quantity: 0,
                id: 'blackt',
            },
            gray: {
                name: 'ATL Hustle Gray T-Shirt',
                color: 'gray',
                size: '',
                price: 20,
                quantity: 0,
                id: 'grayt',
            }
        },
        polo: {
            name: 'ATL Hustle Polo',
            color: 'black',
            size: '',
            price: 30,
            quantity: 0,
            id: 'polo',
        },
        hat: {
            name: 'ATL Hustle 5 Panel Hat',
            color: 'black',
            price: 25,
            quantity: 0,
            id: 'hat'
        }
    },
    discs: {
        game: {
            name: 'ATL Hustle Game Disc',
            price: 15,
            quantity: 0,
            id: 'gamedisc'
        },
        futures: {
            name: 'Hustle Futures Disc',
            price: 15,
            quantity: 0,
            id: 'futuresdisc'
        },
        peach: {
            name: 'ATL Hustle Peach Disc',
            price: 15,
            quantity: 0,
            id: 'peachdisc',
        }
    }
}

const Gear = (props) => {
    return (
        <div>
            <Link style={navStyle} to='/shop'>
                <div>Back to Shop</div>
            </Link>
            <Jerseys increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
            <Apparel increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
            <Discs increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
        </div>
    )
}

const Size = (props) => {
    const sizeSelect = (e) => {
        props.item.size = e.target.textContent;
        props.item.id = `${props.item.id}${e.target.textContent}`;
    }
    if (props.item.name === 'ATL Hustle 5 Panel Hat') return
    return (
        <div className='sizeSelector'>
            <button onClick={(e) => {sizeSelect(e)}} className='Small sizeBtn'>S</button>
            <button onClick={(e) => {sizeSelect(e)}} className='Medium sizeBtn'>M</button>
            <button onClick={(e) => {sizeSelect(e)}} className='Large sizeBtn'>L</button>
        </div>
    )
}

const Jerseys = (props) => {
    const jerseys = [];

    const gearFilter = () => {
        let jerseySelect = allGear.jerseys;
        for (let jersey in jerseySelect) {
            jerseys.push(jerseySelect[jersey]);
        }
    }   
    gearFilter();

    return (
        <div className='jerseySection'>
            <h2>Replica Jerseys</h2>
            {jerseys.map(jersey => {
                return (
                    <div key={jersey.id} className='shopItem'>
                        <div className='jersey'>{jersey.name}</div>
                        <Size item={jersey}/>
                        <div className='quantity'>
                            <button onClick={() => {console.log(jersey); props.decrement(jersey)}} className='decrement'>-</button>
                            <input type='text' placeholder="Quantity" id={jersey.id} name={jersey.id} />
                            <button onClick={() => {props.increment(jersey)}} className='increment'>+</button>
                        </div>
                        <button onClick={() => {props.addItem(jersey)}} className='addToCart'>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

const Apparel = (props) => {
    const apparel = [];

    const gearFilter = () => {
        let apparelSelect = allGear.apparel;
        for (let item in apparelSelect) {
            if (item === 'tshirts') {
                let tshirts = apparelSelect[item]
                for (let shirt in tshirts) {
                    apparel.push(tshirts[shirt]);
                }
            } else {
                apparel.push(apparelSelect[item]);
            }
        }
    }
    gearFilter();

    return (
        <div className='apparelSection'>
            <h2>Apparel</h2>
            {apparel.map(item => {
                return (
                    <div key={item.id} className='shopItem'>
                        <div className='apparel'>{item.name}</div>
                        <Size item={item} />
                        <div className='quantity'>
                            <button onClick={() => {props.decrement(item)}} className='decrement'>-</button>
                            <input type='text' placeholder="Quantity" id={item.id} name={item.id} />
                            <button onClick={() => {props.increment(item)}} className='increment'>+</button>
                        </div>
                        <button onClick={() => {props.addItem(item)}} className='addToCart'>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

const Discs = (props) => {
    let discs = [];

    const gearFilter = () => {
        let discSelect = allGear.discs;
        for (let disc in discSelect) {
            discs.push(discSelect[disc]);
        }
    }
    gearFilter();

    return (
        <div className='discSection'>
            <h2>Discs</h2>
            {discs.map(disc => {
                return (
                    <div key={disc.id} className='shopItem'>
                        <div className='disc'>{disc.name}</div>
                        <div className='quantity'>
                            <button onClick={() => {props.decrement(disc)}} className='decrement'>-</button>
                            <input type='text' placeholder="Quantity" id={disc.id} name={disc.id} />
                            <button onClick={() => {props.increment(disc)}} className='increment'>+</button>
                        </div>
                        <button onClick={() => {props.addItem(disc)}} className='addToCart'>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Gear