import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from 'react';
import Menu from "./menu.js"

import Podlylogo from "../components/podlylogo"




const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);

  return (
  <header
    style={{
      marginBottom: `1.05rem`
    }}
  >
    <div
      style={{
        margin: `0 2.5rem`,
        maxWidth: 960,
        padding: `0.85rem 0` }}
      className="header"
    >
      <h2 style={{ margin: 0 }}>
        <Link to="/" >
          <Podlylogo className="logosvg" />
        </Link>
      </h2>
      <div>
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
    <div>

</div>

  </header>
  );
  }



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: 'Podly',
}

export default Header
