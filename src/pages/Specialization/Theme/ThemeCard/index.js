import React from 'react';

import type from './type';

import * as S from './styled';

function ThemeCard({ title, items }) {
  return (
    <S.ThemeCardContainer>
      <S.ThemeCardTitle>{title}</S.ThemeCardTitle>
      <S.ThemeCardItems>
        {items.map((each, i) => (
          <S.ThemeCardItem key={each}>
            {items.length > 1 ? `${i + 1}. ${each}` : each}
          </S.ThemeCardItem>
        ))}
      </S.ThemeCardItems>
    </S.ThemeCardContainer>
  );
}

ThemeCard.propTypes = type;

export default ThemeCard;
