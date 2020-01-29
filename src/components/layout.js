/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SideBar from './sidebar'
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import './styles.css'


  

const Layout = ({ children }) => {
	return (
		<>
			<div id="outer-container">
				<Header />
				<SideBar/>
				<main id="page-wrap">{children}</main>
			</div>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
