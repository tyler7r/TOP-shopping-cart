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
            img: require('../../images/homekit.jpg'),
        },
        away: {
            name: '2023 Away Kit',
            color: 'white',
            price: 60,
            number: '',
            size: '',
            quantity: 0,
            fees: 0,
            id: 'awaykit',
            img: require('../../images/awaykit.jpg'),
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
            img: require('../../images/sunhoodie.jpg'),
        },
        tshirts: {
            purple: {
                name: 'ATL Hustle Purple T-Shirt',
                color: 'purple',
                size: '',
                price: 20,
                quantity: 0,
                id: 'purplet',
                img: require('../../images/purplet.jpg'),
            },
            black: {
                name: 'ATL Hustle Black T-Shirt',
                color: 'black',
                size: '',
                price: 20,
                quantity: 0,
                id: 'blackt',
                img: require('../../images/blackt.jpg'),
            },
            gray: {
                name: 'ATL Hustle Gray T-Shirt',
                color: 'gray',
                size: '',
                price: 20,
                quantity: 0,
                id: 'grayt',
                img: require('../../images/grayt.jpg'),
            }
        },
        polo: {
            name: 'ATL Hustle Polo',
            color: 'black',
            size: '',
            price: 30,
            quantity: 0,
            id: 'polo',
            img: require('../../images/polo.jpg'),
        },
        hat: {
            name: 'ATL Hustle 5 Panel Hat',
            color: 'black',
            price: 25,
            quantity: 0,
            id: 'hat',
            img: require('../../images/hat.jpg'),
        }
    },
    discs: {
        game: {
            name: 'ATL Hustle Game Disc',
            price: 15,
            quantity: 0,
            id: 'gamedisc',
            img: require('../../images/gamedisc.jpg'),
        },
        futures: {
            name: 'Hustle Futures Disc',
            price: 15,
            quantity: 0,
            id: 'futuresdisc',
            img: require('../../images/futuresdisc.jpg'),
        },
        peach: {
            name: 'ATL Hustle Peach Disc',
            price: 15,
            quantity: 0,
            id: 'peachdisc',
            img: require('../../images/peachdisc.jpg'),
        }
    }
}

const Gear = (props) => {
    return (
        <div className='content'>
            <Link style={navStyle} to='/'>
                <div className='backToShop'>Back to Home</div>
            </Link>
            <Jerseys increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
            <Apparel increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
            <Discs increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
        </div>
    )
}

const Size = (props) => {
    const sizeSelect = (e) => {
        let buttons = document.querySelectorAll(`.${props.item.id}.sizeBtn`);
        buttons.forEach((button) => {
            button.classList.remove('selectedSize');
        })
        let button = document.querySelector(`#${e.target.id}`);
        button.classList.add('selectedSize');
        props.item.size = e.target.textContent;
    }

    if (props.item.name === 'ATL Hustle 5 Panel Hat') return
    return (
        <div className='sizeSelector'>
            <button onClick={(e) => {sizeSelect(e)}} id={props.item.id + 'S'} className={props.item.id + ' sizeBtn'}>S</button>
            <button onClick={(e) => {sizeSelect(e)}} id={props.item.id + 'M'} className={props.item.id + ' sizeBtn'}>M</button>
            <button onClick={(e) => {sizeSelect(e)}} id={props.item.id + 'L'} className={props.item.id + ' sizeBtn'}>L</button>
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
            <h2 className='sectionTitle'>Replica Jerseys</h2>
            <div className='jerseys'>
                {jerseys.map(jersey => {
                    return (
                        <div key={jersey.id} className="shopItemDblBorder">
                            <div key={jersey.id} className='shopItem'>
                                <img className='shopImg' src={jersey.img} alt={jersey.id}/>
                                <div className='shopItemDivider'> </div>
                                <div className='itemName'>{jersey.name}</div>
                                <Size item={jersey}/>
                                <div className='quantity'>
                                    <button onClick={() => {props.decrement(jersey)}} className='decrement'>-</button>
                                    <input className='quantityInput' type='text' placeholder="0" id={jersey.id} name={jersey.id} />
                                    <button onClick={() => {props.increment(jersey)}} className='increment'>+</button>
                                </div>
                                <div className='itemPrice'>${jersey.price}</div>
                                <button onClick={() => {props.addItem(jersey)}} className='addToCart'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
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
            <h2 className='sectionTitle'>Apparel</h2>
            <div className='apparel'>
                {apparel.map(item => {
                    return (
                        <div key={item.id} className="shopItemDblBorder">
                            <div key={item.id} className='shopItem'>
                                <img className='shopImg' src={item.img} alt={item.id}/>
                                <div className='shopItemDivider'> </div>
                                <div className='itemName'>{item.name}</div>
                                <Size item={item} />
                                <div className='quantity'>
                                    <button onClick={() => {props.decrement(item)}} className='decrement'>-</button>
                                    <input className='quantityInput' type='text' placeholder="0" id={item.id} name={item.id} />
                                    <button onClick={() => {props.increment(item)}} className='increment'>+</button>
                                </div>
                                <div className='itemPrice'>${item.price}</div>
                                <button onClick={() => {props.addItem(item)}} className='addToCart'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
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
            <h2 className='sectionTitle'>Discs</h2>
            <div className='discs'>
                {discs.map(disc => {
                    return (
                        <div key={disc.id} className="shopItemDblBorder">
                            <div key={disc.id} className='shopItem'>
                                <img className='shopImg' src={disc.img} alt={disc.id}/>
                                <div className='shopItemDivider'> </div>
                                <div className='itemName'>{disc.name}</div>
                                <div className='quantity'>
                                    <button onClick={() => {props.decrement(disc)}} className='decrement'>-</button>
                                    <input className='quantityInput' type='text' placeholder="0" id={disc.id} name={disc.id} />
                                    <button onClick={() => {props.increment(disc)}} className='increment'>+</button>
                                </div>
                                <div className='itemPrice'>${disc.price}</div>
                                <button onClick={() => {props.addItem(disc)}} className='addToCart'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gear;
export { allGear };
export { Size };