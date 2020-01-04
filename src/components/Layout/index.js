import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import PageTitle from '../PageTitle';
import SEO from '../SEO';

function Layout({ children, featured, title }) {
  return (
    <>
      <SEO title={title} />
      <header id="app-header">
        <Navbar title={title} />
        <PageTitle title={title} featured={featured} />
      </header>
      <main id="app-main">{children}</main>
    </>
  );
}

Layout.defaultProps = { title: '', featured: false };

Layout.propTypes = {
  title: PropTypes.string,
  featured: PropTypes.oneOf([
    PropTypes.bool,
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string,
    }),
  ]),
  children: PropTypes.node.isRequired,
};

export default Layout;
