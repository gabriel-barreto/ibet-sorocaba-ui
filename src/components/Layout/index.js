import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useContacts } from '../../context';

import ErrorRedirect from '../ErrorRedirect';
import Footer from '../Footer';
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';
import SEO from '../SEO';
import Spinner from '../Spinner';

import * as S from './styled';

import Routes from '../../routes';

function Layout({ children, featured, redirectCondition, title, match }) {
  const [actualPath, setActualPath] = useState('');
  const { contacts, loading, error } = useContacts();

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
        <ErrorRedirect condition={redirectCondition || error}>
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
          <Footer
            hours={contacts.hours || []}
            infos={contacts.infos || []}
            social={contacts.social || []}
          />
        </ErrorRedirect>
      ) : null}
    </>
  );
}

Layout.defaultProps = { title: '', featured: false, redirectCondition: false };

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
  redirectCondition: PropTypes.bool,
  title: PropTypes.string,
};

export default withRouter(Layout);
