import React from "react"

import Layout from "../components/layout"
import MenuItems from "../components/Menuitems"
import SEO from "../components/seo"

import loop2 from "../images/loop2.png"

const Contact = () => (
  <div className="contact">
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

    
  </Layout>
  <footer>
    <img src={loop2} />
  <div>
    <span>+1 (123) 456-7890    </span>
    <span>hello@pod.ly</span>
  </div>

  <div>
    <span>Pod.ly</span>
    <span>1234 Lorem Ipsum St. #123</span>
    <span>City, State 12345 USA</span>
  </div>
  <MenuItems />

  <div className="copyright">Copyright 2020 Keely Retzloff</div>
</footer>
  </div>
)

export default Contact