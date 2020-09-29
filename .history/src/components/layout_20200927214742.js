/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"


import Header from "./header"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./../styles/layout.css"



import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far, fab, fas)

const Layout = ({ children }) => {


  return (
    <>
      <Header siteTitle='Pod.ly' />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1060,
          padding: `0px .2rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
