import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Layout = ({ children, title }) => {
  const showTitle = title ? `${title} - React Webpack` : 'React Webpack'

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />

        <title>{showTitle}</title>
      </Helmet>

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

Layout.defaultProps = {
  title: ''
}

export default Layout
