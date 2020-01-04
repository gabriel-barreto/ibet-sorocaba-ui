import React from 'react';
import PropTypes from 'prop-types';

import { Media } from '../../utils';

import * as C from './content';
import * as S from './styled';

function PageTitle({ featured, small, title }) {
  return (
    <S.PageTitleWrapper
      small={small}
      bg={C.bg[title ? title.toLowerCase() : 'home'][Media.getScreenSize()]}
    >
      <S.PageTitleText className={!title ? '--hide' : ''}>
        {title}
      </S.PageTitleText>
      {featured && featured.title ? (
        <S.PageTitleFeaturedContainer>
          <S.PageTitleFeaturedTitles>
            <S.PageTitleFeaturedTitle>
              {featured.title}
            </S.PageTitleFeaturedTitle>
            <S.PageTitleFeaturedSubtitle>
              {featured.subtitle}
            </S.PageTitleFeaturedSubtitle>
          </S.PageTitleFeaturedTitles>
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
  featured: false,
  small: false,
};

PageTitle.propTypes = {
  featured: PropTypes.oneOf([
    PropTypes.bool,
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string,
    }),
  ]),
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default PageTitle;
