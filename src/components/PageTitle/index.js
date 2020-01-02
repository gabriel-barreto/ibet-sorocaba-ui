import React from 'react';
import PropTypes from 'prop-types';

import homeSm from '../../assets/home-bg-sm.jpg';

import * as S from './styled';

const bg = {
  home: {
    sm: homeSm,
    xl: homeSm,
  },
};

function PageTitle({ featured, small, title }) {
  return (
    <S.PageTitleWrapper
      small={small}
      bg={bg[title ? title.toLowerCase() : 'home'].sm}
    >
      <S.PageTitleText className={!title ? '--hide' : ''}>
        {title}
      </S.PageTitleText>
      {featured.title ? (
        <S.PageTitleFeaturedContainer>
          <S.PageTitleFeaturedTitle>{featured.title}</S.PageTitleFeaturedTitle>
          <S.PageTitleFeaturedSubtitle>
            {featured.subtitle}
          </S.PageTitleFeaturedSubtitle>
          <S.PageTitleFeaturedDescriptionContainer>
            {featured.description.map(p => (
              <S.PageTitleFeaturedDescription key={p}>
                {p}
              </S.PageTitleFeaturedDescription>
            ))}
          </S.PageTitleFeaturedDescriptionContainer>
          <S.PageTitleFeaturedLink to={featured.URL}>
            {featured.label}
          </S.PageTitleFeaturedLink>
        </S.PageTitleFeaturedContainer>
      ) : null}
      {!small ? <S.PageTitleScrollIndicator /> : null}
    </S.PageTitleWrapper>
  );
}

PageTitle.defaultProps = {
  featured: {
    description: [
      'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos',
      'Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.',
    ],
    label: 'GARANTIR MINHA VAGA',
    subtitle: 'Lorem Ipsum do Mestrado IBET 2020',
    title: 'Mestrado IBET 2020',
    URL: '/',
  },
  small: false,
};

PageTitle.propTypes = {
  featured: PropTypes.shape({
    label: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    URL: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default PageTitle;
