import React from 'react';

import notFoundIcon from '../../assets/notFound.svg';

import * as S from './styled';

function notFoundPage() {
  return (
    <S.NotFoundPageWrapper>
      <S.NotFoundIcon src={notFoundIcon} title="404" alt="404" />
      <S.NotFoundLabel>
        Desculpe, não encontrei o que você procurava!
      </S.NotFoundLabel>
      <S.NotFoundParagraph>
        O link que você seguiu pode estar quebrado ou pode ter sido removido,
        você pode tentar novamente atualizando a página após alguns instantes!
      </S.NotFoundParagraph>
      <S.NotFoundGoBackHome
        to="/"
        title="Voltar para a Home"
        alt="Voltar para a Home"
      >
        Voltar para a Home
      </S.NotFoundGoBackHome>
    </S.NotFoundPageWrapper>
  );
}

export default notFoundPage;
