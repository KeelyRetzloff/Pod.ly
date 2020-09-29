import { Link } from "gatsby"
import React from "react"



const Mainbutton = ({CTA, link}) => (
<Link to={link} >
  <div class="mainbutton-wrapper">
  <button class="mainbutton">{CTA}</button>
  </div>
</Link>
)



export default Mainbutton