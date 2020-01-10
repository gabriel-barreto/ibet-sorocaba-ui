import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Infos({ entries }) {
  return (
    <>
      {entries.map(each => (
        <S.NavbarSocialInfo
          key={each.url}
          href={each.url}
          target="_blank"
          className={each.featured ? '--featured' : ''}
          rel="noreferrer noopener"
          title={each.value}
        >
          <S.NavbarSocialInfoIcon>
            <each.icon size={18} preserveAspectRatio="xMidYMid meet" />
          </S.NavbarSocialInfoIcon>
          {each.value}
        </S.NavbarSocialInfo>
      ))}
    </>
  );
}

export const Type = PropTypes.arrayOf(
  PropTypes.shape({
    featured: PropTypes.bool,
    url: PropTypes.string.isRequired,
  }),
);

Infos.propTypes = { entries: Type.isRequired };

export default Infos;
