import React from "react";
import { Link } from "react-router-dom";
import { navStyle } from "../Shop"

const allTickets = {
    indy429: {
        opponent: 'Indianopolis Alley Cats',
        type: 'Individual',
        price: 10,
        id: 'indy429',
    },
    car505: {
        opponent: 'Carolina Flyers',
        type: 'Individual',
        price: 15,
        id: 'car505'
    },
    aus512: {
        opponent: 'Austin Sol',
        type: 'Individual',
        price: 15,
        id: 'aus512'
    },
    hou527: {
        opponent: 'Houston Havoc',
        type: 'Individual',
        price: 10,
        id: 'hou527'
    },
    dal617: {
        opponent: 'Dallas Legion',
        type: 'Individual',
        price: 10,
        id: 'dal617',
    },
    car722: {
        opponent: 'Carolina Flyers',
        type: 'Individual',
        price: 15,
        id: 'car722',
    },
    ambassador: {
        name: '2023 Ambassador Pass',
        type: 'Season',
        price: 130,
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
            <div>
                <h1>Individual Tickets</h1>
                <IndividualTickets addItem={props.addItem}/>
            </div>
            <div>
                <h1>Season Tickets</h1>
                <SeasonTickets addItem={props.addItem}/>
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
                    <div className='shopItem'>
                        <div className='individualTicket' key={ticket.id}>{ticket.opponent}</div>
                        <button onClick={props.addItem} className='addToCart'>Add to Cart</button>
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

    season();

    return (
        <div className='seasonTickets'>
            {tickets.map(ticket => {
            return (
                <div className='shopItem'>
                    <div className='seasonTicket' key={ticket.id}>{ticket.name}</div>
                    <button onClick={props.addItem} className='addToCart'>Add to Cart</button>
                </div>
            )
            })}
        </div>
    )
}

export default Tickets;