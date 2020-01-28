import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Featured({ action, description, subtitle, title, url }) {
  return (
    <S.PageTitleFeaturedContainer>
      <S.PageTitleFeaturedTitles>
        <S.PageTitleFeaturedTitle>{title}</S.PageTitleFeaturedTitle>
        <S.PageTitleFeaturedSubtitle>{subtitle}</S.PageTitleFeaturedSubtitle>
      </S.PageTitleFeaturedTitles>
      <S.PageTitleFeaturedDescriptionContainer>
        {description.map(p => (
          <S.PageTitleFeaturedDescription key={p}>
            {p}
          </S.PageTitleFeaturedDescription>
        ))}
      </S.PageTitleFeaturedDescriptionContainer>
      <S.PageTitleFeaturedLink to={url}>{action}</S.PageTitleFeaturedLink>
    </S.PageTitleFeaturedContainer>
  );
}

Featured.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Featured;
