import { Link } from "gatsby"
import React from "react"


const MenuItems = () => {
    return (
    <div className="menus">
        <div className="overlay-menu">
        <Link to="/">Home</Link>
        <Link to="/about">Collections</Link>
        <Link to="/shop/">Shop</Link>
        <Link to="/contact/">Contact</Link>
        </div>
        <div className="social-menu">
        <Link to="/">Twitter</Link>
        <Link to="/">Instagram</Link>
        <Link to="/">Facebook</Link>
        </div>
    </div>
    )
}

export default MenuItems