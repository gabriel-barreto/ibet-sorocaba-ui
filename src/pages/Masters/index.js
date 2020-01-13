import React from 'react';

import { HTMLContainer, Layout } from '../../components';

import * as C from './content';
import * as S from './styled';

function MastersPage() {
  return (
    <Layout>
      <S.MastersSection>
        <S.MastersSectionTitle>{C.title}</S.MastersSectionTitle>
        <HTMLContainer content={C.content} />
        <S.MastersButton href={C.url} target="blank" rel="noreferrer noopener">
          Ver mais informações
        </S.MastersButton>
      </S.MastersSection>
    </Layout>
  );
}

export default MastersPage;
