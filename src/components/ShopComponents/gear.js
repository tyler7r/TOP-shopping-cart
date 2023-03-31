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
            fees: 0,
            id: 'homekit',
        },
        away: {
            name: '2023 Away Kit',
            color: 'white',
            price: 60,
            number: '',
            fees: 0,
            id: 'awaykit'
        }
    },
    apparel: {
        sunhoodie: {
            name: 'ATL Hustle Purple Sun Hoodie',
            color: 'purple',
            price: 50,
            saleprice: 39,
            id: 'sunhoodie',
        },
        tshirts: {
            purple: {
                name: 'ATL Hustle Purple T-Shirt',
                color: 'purple',
                price: 20,
                id: 'purplet'
            },
            black: {
                name: 'ATL Hustle Black T-Shirt',
                color: 'black',
                price: 20,
                id: 'blackt',
            },
            gray: {
                name: 'ATL Hustle Gray T-Shirt',
                color: 'gray',
                price: 20,
                id: 'grayt',
            }
        },
        polo: {
            name: 'ATL Hustle Polo',
            color: 'black',
            price: 30,
            id: 'polo',
        },
        hat: {
            name: 'ATL Hustle 5 Panel Hat',
            color: 'black',
            price: 25,
            id: 'hat'
        }
    },
    discs: {
        game: {
            name: 'ATL Hustle Game Disc',
            price: 15,
            id: 'gamedisc'
        },
        futures: {
            name: 'Hustle Futures Disc',
            price: 15,
            id: 'futuresdisc'
        },
        peach: {
            name: 'ATL Hustle Peach Disc',
            price: 15,
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
            <Jerseys addItem={props.addItem}/>
            <Apparel addItem={props.addItem}/>
            <Discs addItem={props.addItem}/>
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
                        <button onClick={() => {props.addItem(disc)}} className='addToCart'>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Gear