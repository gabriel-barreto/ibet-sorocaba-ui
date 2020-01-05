import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function SocialButtons({ entries }) {
  return (
    <>
      {entries.map(each => (
        <S.NavbarSocialButton
          key={each.url}
          href={each.url}
          target="_blank"
          rel="noreferrer noopener"
          title={each.label}
          alt={each.label}
        >
          <S.NavbarSocialButtonIcon>
            <each.icon />
          </S.NavbarSocialButtonIcon>
        </S.NavbarSocialButton>
      ))}
    </>
  );
}

export const Type = PropTypes.arrayOf(
  PropTypes.shape({
    icon: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
);

SocialButtons.propTypes = { entries: Type.isRequired };

export default SocialButtons;
