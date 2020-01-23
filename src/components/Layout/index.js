import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Footer from '../Footer';
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';
import SEO from '../SEO';

import * as C from './content';
import Routes from '../../routes';

function Layout({ children, featured, title, match }) {
  const [actualPath, setActualPath] = useState('');
  const activeRoute = Routes.find(each => each.path === match.path);

  useEffect(() => {
    if (match.path !== actualPath) {
      window.scrollTo({ left: 0, top: 0 });
    }
    setActualPath(match.path);
  }, [match]);
  return (
    <>
      <SEO title={title} />
      <header id="app-header">
        <Navbar title={title} social={C.social} infos={C.infos} />
        <PageTitle
          name={activeRoute.name}
          title={activeRoute.title}
          featured={featured}
        />
      </header>
      <main id="app-main">{children}</main>
      <Footer social={C.social} infos={C.infos} />
    </>
  );
}

Layout.defaultProps = { title: '', featured: false };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  featured: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string,
    }),
  ]),
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
  title: PropTypes.string,
};

export default withRouter(Layout);
