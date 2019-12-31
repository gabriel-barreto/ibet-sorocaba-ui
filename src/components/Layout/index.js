import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../SEO';

function Layout({ children, title }) {
  return (
    <>
      <SEO title={title} />
      <header>Header</header>
      <main>{children}</main>
    </>
  );
}

Layout.defaultProps = { title: '' };

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
