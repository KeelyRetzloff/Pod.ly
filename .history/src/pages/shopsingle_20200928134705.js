import React from "react"

import Mainbutton from "../components/Mainbutton"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Podsgrey

const Shopsingle = () => (
  <div className="shopsingle">
    
    <Layout>
    <SEO title="Shop" />

    <div className="singlepod">
    <h1>Pod Name</h1>
    <Mainbutton CTA={'Add to Cart'} link={'/cart'}/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    
  </Layout>

  </div>
)

export default Shopsingle