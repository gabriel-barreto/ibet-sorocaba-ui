import React from 'react';

import * as S from './styled';

function WelcomeSection() {
  return (
    <S.WelcomeWrapper>
      <S.WelcomeMessage>Seja bem vindo ao</S.WelcomeMessage>
      <S.WelcomeTitle>IBET Sorocaba</S.WelcomeTitle>
      <S.WelcomeSectionDecorator />
    </S.WelcomeWrapper>
  );
}

export default WelcomeSection;
