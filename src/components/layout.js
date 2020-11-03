/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Fade } from "react-reveal"

import Header from "./header"
import "../assets/scss/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        <div className={"footer--content"}>
          <div className={"link-section"}>
            <a
              href={
                "https://www.ibm.com/design/thinking/page/framework/keys/hills"
              }
              rel={"noreferrer"}
              target={"_blank"}
            >
              <Fade left distance={"6px"} delay={750}>
                What the hill is this?
              </Fade>
            </a>
            <a
              href={"https://www.dpip.dev/"}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <Fade left distance={"6px"} delay={1000}>
                Who the hill made this?
              </Fade>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
