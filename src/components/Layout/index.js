import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import SEO from '../SEO';

function Layout({ children, title }) {
  return (
    <>
      <SEO title={title} />
      <header id="app-header">
        <Navbar title={title} />
      </header>
      <main id="app-main">{children}</main>
    </>
  );
}

Layout.defaultProps = { title: '' };

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
