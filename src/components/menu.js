
import MenuOverlay from "../components/MenuOverlay"
import React from "react"
import { bool, func } from 'prop-types';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Menu = ({ open, setOpen }) => (
    
<div>

  <span className="menuicon fa-fw" 
        role="button"
        tabindex="0"
        aria-label="open menu"
        open={open} 
        onClick={() => setOpen(!open)} 
        style={{padding: `.45rem 1.0875rem`, 
                border: 'solid 2px', 
                borderRadius: '50px', 
                display: 'flex', 
                alignContent:'center', 
                justifyContent: 'center',
                zIndex: '9000'
              }}
        >
    <FontAwesomeIcon icon="bars" size="xs" inverse style={{alignSelf:"left"}} />
  </span>

  <div >
  <MenuOverlay open={open} setOpen={setOpen} />
  </div>

</div>  
)

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};



export default Menu