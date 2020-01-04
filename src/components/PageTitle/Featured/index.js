import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Featured({ description, label, subtitle, title, URL }) {
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
      <S.PageTitleFeaturedLink to={URL}>{label}</S.PageTitleFeaturedLink>
    </S.PageTitleFeaturedContainer>
  );
}

Featured.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
};

export default Featured;
