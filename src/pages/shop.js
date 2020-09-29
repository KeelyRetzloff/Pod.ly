import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Podsmodule from "../components/podsmodule"

const Shop = () => (
  <div className="shop">

  <Layout>
    <SEO title="Shop" />
    <h1>Shop</h1>
    
    <div className="pods-container">
    <Podsmodule />
    </div>
  </Layout>
  
  </div>
)



export default Shop