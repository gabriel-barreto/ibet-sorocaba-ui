import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Footer from '../Footer';
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';
import SEO from '../SEO';
import Spinner from '../Spinner';

import * as S from './styled';

import Routes from '../../routes';
import { useContactInfos } from '../../hooks';

function Layout({ children, featured, title, match }) {
  const [actualPath, setActualPath] = useState('');
  const [contacts, loading] = useContactInfos();

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
      <S.LayoutSpinnerWrapper visible={loading}>
        <Spinner />
      </S.LayoutSpinnerWrapper>
      {!loading ? (
        <>
          <header id="app-header">
            <Navbar
              title={title}
              social={contacts.social || []}
              infos={contacts.infos || []}
            />
            <PageTitle
              name={activeRoute.name}
              title={activeRoute.title}
              featured={featured}
            />
          </header>
          <main id="app-main">{children}</main>
          <Footer social={contacts.social || []} infos={contacts.infos || []} />
        </>
      ) : null}
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
