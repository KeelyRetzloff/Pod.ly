import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mainbutton from "../components/mainbutton"

import redPods from "../images/podsred.png"

const About = () => (
  <div className="about">
  
  
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <div className="about-container">

    <div className="about-text" >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <Mainbutton CTA={'Shop'} link={'/shop'}/>
    </div>

    <img src={redPods} alt="red Pods" style={{maxWidth: '900px',minWidth: '600px', marginTop: '-3%', overflow: 'hidden'}} />
    </div>
  </Layout>

  
  </div>
)

export default About