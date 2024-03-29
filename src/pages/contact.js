import React from "react"

import Layout from "../components/layout"
import MenuItems from "../components/menuitems"
import SEO from "../components/seo"


import loop2 from "../images/loop2.png"

const Contact = () => (
  <div className="contact">
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p class="quote">Every Moment is a Fresh Beginning.</p>

    <form method="POST">
      <label for="formname">Name</label>
        <input type="text" name="formname" id="formname"  />
      <label for="formemail">Email</label>
        <input type="text" name="formemail" id="formemail"  />
      <label for="formmessage">Message</label>
        <textarea name="formmessage" id="formmessage"></textarea>
      <button type="submit" value="submit">Submit</button>
    </form>
  </Layout>

  <footer>
    <figure>
    <img src={loop2} className="footerloop" alt="loop text divider" />
    </figure>
  <div className="footer-container">

<div className="footer-info">
  <div className="footer-contact">
    <span>+1 (123) 456-7890    </span>
    <span>hello@pod.ly</span>
  </div>

  <div className="footer-address">
    <span>Pod.ly</span>
    <span>1234 Lorem Ipsum St. #123</span>
    <span>City, State 12345 USA</span>
  </div>
  </div>

 
  <MenuItems />
  </div>

  <div className="copyright">Copyright 2020 Keely Retzloff</div>
  </footer>
</div>
)

export default Contact