import React from "react";
import { Link } from "react-router-dom";
import { navStyle } from "../Shop"

const allTickets = {
    indy429: {
        name: 'Indianopolis Alley Cats',
        type: 'Individual',
        date: 'April 29th',
        price: 10,
        quantity: 0,
        id: 'indy429',
    },
    car505: {
        name: 'Carolina Flyers',
        type: 'Individual',
        date: 'May 5th',
        price: 15,
        quantity: 0,
        id: 'car505'
    },
    aus512: {
        name: 'Austin Sol',
        type: 'Individual',
        date: 'May 12th',
        quantity: 0,
        price: 15,
        id: 'aus512'
    },
    hou527: {
        name: 'Houston Havoc',
        type: 'Individual',
        date: 'May 27th',
        quantity: 0,
        price: 10,
        id: 'hou527'
    },
    dal617: {
        name: 'Dallas Legion',
        date: 'June 17th',
        type: 'Individual',
        price: 10,
        quantity: 0,
        id: 'dal617',
    },
    car722: {
        name: 'Carolina Flyers',
        type: 'Individual',
        date: 'July 22nd',
        price: 15,
        quantity: 0,
        id: 'car722',
    },
    ambassador: {
        name: '2023 Ambassador Pass',
        type: 'Season',
        price: 130,
        quantity: 0,
        id: 'ambassador',
        details: {
            header: 'This ticket will admit 1 person to all Hustle Home games (including Playoffs)',
            vouchers: '4 Guest Tickets',
            parking: 'Free',
            AUDLtv: '3 Month Access'
        }
    },
    family: {
        name: '2023 Family Pass',
        type: 'Season',
        price: 199,
        quantity: 0,
        id: 'family',
        details: {
            header: 'This ticket will admit 4 people to all Hustle Home games (including Playoffs)',
            vouchers: 'Two free King of Pops per game',
            parking: 'Free',
            AUDLtv: '3 Month Access'
        }
    },
    buddy: {
        name: '2023 Buddy Pass',
        type: 'Season',
        price: 149,
        quantity: 0,
        id: 'buddy',
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
        <div>
            <Link style={navStyle} to='/shop'>
                    <div>Back to Shop</div>
            </Link>
            <div id='individualTickets'>
                <h1 className='sectionTitle'>Individual Tickets</h1>
                <IndividualTickets increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
            </div>
            <div id='seasonTickets'>
                <h1 className='sectionTitle'>Season Tickets</h1>
                <SeasonTickets increment={props.increment} decrement={props.decrement} addItem={props.addItem}/>
            </div>
        </div>
    )
}

const IndividualTickets = (props) => {
    let tickets = [];

    const individual = () => {
        for (let ticket in allTickets) {
            if (allTickets[ticket].type === 'Individual') {
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
                        <img className='shopImg' src={require(`../../images/${ticket.id}.jpg`)} alt={ticket.id}/>
                        <div className='individualTicket'>{ticket.date} vs. {ticket.name}</div>
                        <div className='quantity'>
                            <button onClick={() => {props.decrement(ticket)}} className='decrement'>-</button>
                            <input type='text' placeholder="Quantity" id={ticket.id} name={ticket.id} />
                            <button onClick={() => {props.increment(ticket)}} className='increment'>+</button>
                        </div>
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
            if (allTickets[ticket].type === 'Season') {
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
                    <img className='shopImg' src={require(`../../images/${ticket.id}.jpg`)} alt={ticket.id}/>
                    <div className='seasonTicket'>
                        <div>{ticket.name}</div>
                        <div className='infoButton' onClick={() => {showDetails(ticket)}}>i</div>
                    </div>

                    <div className='quantity'>
                        <button onClick={() => {props.decrement(ticket)}} className='decrement'>-</button>
                        <input type='text' placeholder="Quantity" id={ticket.id} name={ticket.id} />
                        <button onClick={() => {props.increment(ticket)}} className='increment'>+</button>
                    </div>
                    <button onClick={() => {props.addItem(ticket)}} className='addToCart'>Add to Cart</button>
                </div>
            )
            })}
        </div>
    )
}

export default Tickets;
export { allTickets };