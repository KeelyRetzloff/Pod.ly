import React from "react"


import Layout from "../components/layout"
import Mainbutton from "../components/mainbutton"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/podlylogo.png"


const IndexPage = () => (
    <div className="home">
    <div className= "backgroundimage">
    <div className= "backgroundoverlay">
 
    <Layout>
    <SEO title="Home" />

    <div style={{transform: 'rotate(0.5turn)', 
                 maxWidth: '400px', 
                 position: 'relative', 
                 top: 0, 
                 left: '85%', 
                 marginTop: '-10%',
                 overflow: 'hidden' }}>
    <Image />
    </div>

    <div style={{ textAlign: 'center', fontSize: '2em', color: 'white', margin: '-14% 15px 15px'}}>
    
    <h1 style={{display: 'flex', alignItems:'middle', justifyContent: 'center', fontSize: '3.2em', letterSpacing: '.3rem'}}>
      <img src={logo} alt={'p'} style={{width: '6rem', margin: '1.2rem 0.5rem'}} />od.ly
    </h1>
    <p style={{lineHeight: '3rem', marginTop: '-5.5rem', marginLeft: '6.rem'}}>The lightest your ears ever felt</p>
    <Mainbutton CTA={<img src="./../images/arrow-right.png" alt="about"/>} link={'/about'}/>
    
    </div>

    <div style={{ maxWidth: `400px`, 
                  display: 'block',
                  position: 'relative',
                  top: 0,
                  right: '23%',
                  marginTop:'-16%',
                  marginBottom: '-7%'
                  }}>
      <Image />
    </div>

    </Layout>

    </div>
    </div>
    </div>
)

export default IndexPage
