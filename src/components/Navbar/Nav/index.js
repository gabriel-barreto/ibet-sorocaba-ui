import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Nav({ links, path }) {
  return (
    <S.NavbarNav className="navbar-nav">
      {links.map(each => (
        <S.NavLink
          key={each.to}
          className={`${each.to === path ? '--active' : ''} ${
            each.featured ? '--featured' : ''
          }`}
          to={each.to}
        >
          {each.label}
        </S.NavLink>
      ))}
    </S.NavbarNav>
  );
}

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      featured: PropTypes.bool,
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default Nav;
