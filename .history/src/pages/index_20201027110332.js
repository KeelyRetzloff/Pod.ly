import React from "react"


import Layout from "../components/layout"
import Mainbutton from "../components/mainbutton"
import Image from "../components/image"
import SEO from "../components/seo"
import Podlylogo from "../components/podlylogo"


const IndexPage = () => (
    <div className="home">
    <div className= "backgroundimage">
    <div className= "backgroundoverlay">
 
    <Layout>
    <SEO title="Home" />

    <div class="intro-container" style={{textAlign: 'center', fontSize: '2em', color: 'white'}}>
    
    <h1 style={{display: 'flex', alignItems:'middle', justifyContent: 'center', letterSpacing: '.3rem'}}>
      <Podlylogo className="logo-homepage" />
      od.ly
    </h1>
    <p style={{lineHeight: '3rem', marginTop: '-5rem'}}>The lightest your ears felt</p>
    <Mainbutton CTA={<span>about ></span>} link={'/about'}/>
    
    </div>
    <div className="earbud-wrapper">
    <div style={{transform: 'rotate(0.5turn)',  
                 maxWidth: '400px', 
                 overflow: 'hidden' }}
          className="toprightbuds">
    <Image />
    </div>

    <div style={{ maxWidth: `400px`,
                  display: 'block',
                  overflow: 'hidden'
                  }}
          className="bottomleftbuds">
      <Image />
    </div>
    </div>

    </Layout>

    </div>
    </div>
    </div>
)

export default IndexPage
