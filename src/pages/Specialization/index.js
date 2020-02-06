import React, { useEffect, useState } from 'react';

import { usePagesContent } from '../../hooks';

import {
  FullScreenSpinner,
  HTMLContainer,
  Layout,
  Tabs,
} from '../../components';

import Coordination from './Coordination';
import Form from './Form';
import Themes from './Theme';

import * as S from './styled';

function SpecializationPage() {
  const [state, loading, error] = usePagesContent('specialization');
  const [localState, setLocalState] = useState({ tabs: [] });

  useEffect(() => {
    if (state.tabs && state.tabs.length > 0) {
      const tabs = state.tabs.map(each => ({
        ...each,
        component: () => <HTMLContainer content={each.content} />,
      }));
      tabs.push({
        label: 'Coordenação',
        key: 'coordination',
        component: () => <Coordination entries={state.coordination} />,
      });

      setLocalState(prev => ({ ...prev, tabs }));
    }
  }, [state.tabs]);

  return (
    <Layout
      title="Especialização em Direito Tributário do Brasil"
      redirectCondition={error}
    >
      <FullScreenSpinner visible={loading} />
      <S.SpecializationSectionWrapper>
        <div>
          <S.SpecializationTitle>{state.title || ''}</S.SpecializationTitle>
          <Tabs entries={localState.tabs || []} />
          <S.SpecializationSubtitle>Temário</S.SpecializationSubtitle>
          <Themes entries={state.themes || []} />
        </div>
        <S.SpecializationFormContainer>
          <S.SpecializationFormTitle>
            Garanta seu lugar
          </S.SpecializationFormTitle>
          <Form onSubmit={() => {}} />
        </S.SpecializationFormContainer>
      </S.SpecializationSectionWrapper>
    </Layout>
  );
}

export default SpecializationPage;
