
import Image from "../components/image"
import MenuItems from "../components/MenuItems"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./../styles/global.css"


const MenuOverlay = ({ open, setOpen }) => (
    
<div className="menuOverlay" style={open ? {display:"block"} : {display:"none"}}>

  <div style={{transform: 'rotate(0.5turn)', 
              maxWidth: '400px', 
              position: 'relative', 
              top: '30%', 
              left: '74%', 
              marginTop: '-15%' 
             }}
>
      <Image />
  </div>
    <div className="overlay-content">
      <div className="icons">
      <Link to="/cart/">
      <span className="cart-icon">
        <FontAwesomeIcon icon={['fas', 'shopping-bag']} size="xl" inverse  />
      </span>
      </Link> 
      <span onClick={() => setOpen(!open)} className="exit-icon" >
        <FontAwesomeIcon icon={['fas', 'times']} size="xl" inverse />
      </span>
      </div>
      <MenuItems open={open} />
    </div>

</div>  
)


export default MenuOverlay