import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title }) => {
  const showTitle = title ? `${title} - React Webpack` : 'React Webpack';

  return (
    <>
      <Helmet>
        <title>{showTitle}</title>
      </Helmet>

      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

Layout.defaultProps = {
  title: ''
};

export default Layout;
