import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

import ThemeCardType from './ThemeCard/type';
import ThemeCard from './ThemeCard';

function Themes({ entries }) {
  return (
    <S.ThemesContainer>
      {entries.map((each, i) => (
        <ThemeCard
          title={`${i + 1}. ${each.title}`}
          items={each.items}
          key={each.title}
        />
      ))}
    </S.ThemesContainer>
  );
}

Themes.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape(ThemeCardType)).isRequired,
};

export default Themes;
