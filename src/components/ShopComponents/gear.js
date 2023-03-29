import React from "react"
import { Link } from "react-router-dom"
import { navStyle } from "../Shop"

const Gear = (props) => {
    return (
        <div>
            <Link style={navStyle} to='/shop'>
                <div>Back to Shop</div>
            </Link>
            <h1>Gear</h1>
        </div>
    )
}

export default Gear