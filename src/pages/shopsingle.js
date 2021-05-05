import React from "react"

import Mainbutton from "../components/mainbutton"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Podsgrey from "../images/podsgrey.png"

const Shopsingle = () => (
  <div className="shopsingle">
    
    <Layout>
    <SEO title="Shop" />

    <div className="singlepod">
    <div class="singlepod-image-container">
    <img src={Podsgrey} alt="pods" className="singlepod-image"/>
    </div>
    <div class="singlepod-content">
    <h1>lite.weight in color</h1>
    <p className="price">40$</p>
    <Mainbutton CTA={'Add to Cart'} link={'/cart'}/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    </div>
    
  </Layout>

  </div>
)

export default Shopsingle