import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function IntroCard({ bg, icon, label, slug, title }) {
  return (
    <S.IntroCardLink to={slug}>
      <S.IntroCardContainer bg={bg}>
        <S.IntroCardOverlay />
        <S.IntroCardContent>
          <S.IntroCardIcon>{icon}</S.IntroCardIcon>
          <S.IntroCardTitle>{title}</S.IntroCardTitle>
        </S.IntroCardContent>
        <S.IntroCardAction>{label}</S.IntroCardAction>
      </S.IntroCardContainer>
    </S.IntroCardLink>
  );
}

IntroCard.defaultProps = { label: 'Ler mais' };

IntroCard.propTypes = {
  bg: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  label: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IntroCard;
