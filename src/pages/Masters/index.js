import React from 'react';

import { usePagesContent } from '../../hooks';

import { FullScreenSpinner, HTMLContainer, Layout } from '../../components';

import * as S from './styled';

function MastersPage() {
  const [state, loading, error] = usePagesContent('masters');
  return (
    <Layout title="Mestrado" redirectCondition={error}>
      <FullScreenSpinner visible={loading} />
      <S.MastersSection>
        <S.MastersSectionTitle>{state.title}</S.MastersSectionTitle>
        <HTMLContainer content={state.content} />
        <S.MastersButton
          href={state.url}
          target="blank"
          rel="noreferrer noopener"
        >
          Ver mais informações
        </S.MastersButton>
      </S.MastersSection>
    </Layout>
  );
}

export default MastersPage;
