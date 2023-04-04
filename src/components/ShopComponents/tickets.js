import React from "react";
import { Link } from "react-router-dom";
import { navStyle } from "../Shop"

const allTickets = {
    indy429: {
        name: 'Indianopolis Alley Cats',
        type: 'Single Game Ticket',
        date: 'April 29th',
        price: 10,
        quantity: 0,
        id: 'indy429',
        img: require('../../images/indy429.jpg'),
    },
    car505: {
        name: 'Carolina Flyers',
        type: 'Single Game Ticket',
        date: 'May 5th',
        price: 15,
        quantity: 0,
        id: 'car505',
        img: require('../../images/car505.jpg'),
    },
    aus512: {
        name: 'Austin Sol',
        type: 'Single Game Ticket',
        date: 'May 12th',
        quantity: 0,
        price: 15,
        id: 'aus512',
        img: require('../../images/aus512.jpg'),
    },
    hou527: {
        name: 'Houston Havoc',
        type: 'Single Game Ticket',
        date: 'May 27th',
        quantity: 0,
        price: 10,
        id: 'hou527',
        img: require('../../images/hou527.jpg'),
    },
    dal617: {
        name: 'Dallas Legion',
        date: 'June 17th',
        type: 'Single Game Ticket',
        price: 10,
        quantity: 0,
        id: 'dal617',
        img: require('../../images/dal617.jpg'),
    },
    car722: {
        name: 'Carolina Flyers',
        type: 'Single Game Ticket',
        date: 'July 22nd',
        price: 15,
        quantity: 0,
        id: 'car722',
        img: require('../../images/car722.jpg'),
    },
    ambassador: {
        name: '2023 Ambassador Pass',
        type: 'Season Ticket',
        price: 130,
        quantity: 0,
        id: 'ambassador',
        img: require('../../images/ambassador.jpg'),
        details: {
            header: 'This ticket will admit 1 person to all Hustle Home games (including Playoffs)',
            vouchers: '4 Guest Tickets',
            parking: 'Free',
            AUDLtv: '3 Month Access'
        }
    },
    family: {
        name: '2023 Family Pass',
        type: 'Season Ticket',
        price: 199,
        quantity: 0,
        id: 'family',
        img: require('../../images/family.jpg'),
        details: {
            header: 'This ticket will admit 4 people to all Hustle Home games (including Playoffs)',
            vouchers: 'Two free King of Pops per game',
            parking: 'Free',
            AUDLtv: '3 Month Access'
        }
    },
    buddy: {
        name: '2023 Buddy Pass',
        type: 'Season Ticket',
        price: 149,
        quantity: 0,
        id: 'buddy',
        img: require('../../images/buddy.jpg'),
        details: {
            header: 'This ticket will admit 2 people to all Hustle Home games (including Playoffs)',
            vouchers: 'none',
            parking: 'Free',
            AUDLtv: '3 Month Access'
        }
    }
}

const Tickets = (props) => {
    return (
        <div className='content'>
            <Link style={navStyle} to='/'>
                    <div className='backToShop'>Back to Home</div>
            </Link>
            <div id='individualTickets'>
                <h1 className='sectionTitle'>Individual Tickets</h1>
                <IndividualTickets increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
            </div>
            <div id='seasonTickets'>
                <h1 className='sectionTitle lightPurple'>Season Tickets</h1>
                <SeasonTickets increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
            </div>
            <div className='purchaseAUDLTV'>
                <div>Can't Come to a Game? Watch live on AUDL.tv</div>
                <div id='audlTVLink'>AUDL.tv Link</div>
            </div>
        </div>
    )
}

const IndividualTickets = (props) => {
    let tickets = [];

    const individual = () => {
        for (let ticket in allTickets) {
            if (allTickets[ticket].type === 'Single Game Ticket') {
                tickets.push(allTickets[ticket]);
            }
        }
    }

    individual();

    return (
        <div className='individualTickets'>
            {tickets.map(ticket => {
                return (
                    <div key={ticket.id} className='shopItem'>
                        <img className='shopImg' src={ticket.img} alt={ticket.id}/>
                        <div className='shopItemDivider'> </div>
                        <div className='itemName'>{ticket.date} | {ticket.name}</div>
                        <div className='quantity'>
                            <button onClick={() => {props.decrement(ticket)}} className='decrement'>-</button>
                            <input className='quantityInput' type='text' placeholder="0" id={ticket.id} name={ticket.id} />
                            <button onClick={() => {props.increment(ticket)}} className='increment'>+</button>
                        </div>
                        <div className='itemPrice'>${ticket.price}</div>
                        <button onClick={() => {props.addItem(ticket)}} className='addToCart'>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

const SeasonTickets = (props) => {
    const tickets = [];
    
    const season = () => {
        for (let ticket in allTickets) {
            if (allTickets[ticket].type === 'Season Ticket') {
                tickets.push(allTickets[ticket]);
            }
        }
    }

    const showDetails = (ticket) => {
        return (
            <div>{ticket.details.header}</div>
        )
    }

    season();

    return (
        <div className='seasonTickets'>
            {tickets.map(ticket => {
            return (
                <div key={ticket.id} className='shopItem'>
                    <img className='shopImg lightPurple' src={ticket.img} alt={ticket.id}/>
                    <div className='shopItemDivider'> </div>
                    <div className='itemName'>
                        <div>{ticket.name}</div>
                        <div className='infoButton' onClick={() => {showDetails(ticket)}}>i</div>
                    </div>
                    <div className='quantity'>
                        <button onClick={() => {props.decrement(ticket)}} className='decrement'>-</button>
                        <input className='quantityInput lightPurple' type='text' placeholder="0" id={ticket.id} name={ticket.id} />
                        <button onClick={() => {props.increment(ticket)}} className='increment'>+</button>
                    </div>
                    <div className='itemPrice lightPurple'>${ticket.price}</div>
                    <button onClick={() => {props.addItem(ticket)}} className='addToCart lightPurple'>Add to Cart</button>
                </div>
            )
            })}
        </div>
    )
}

export default Tickets;
export { allTickets };