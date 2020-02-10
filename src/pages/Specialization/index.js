import React, { useEffect, useState } from 'react';

import { usePagesContent } from '../../hooks';

import { Mailer } from '../../services';

import {
  FullScreenSpinner,
  HTMLContainer,
  Layout,
  Tabs,
  Toast,
} from '../../components';

import Coordination from './Coordination';
import Form from './Form';
import Themes from './Theme';

import * as S from './styled';

function SpecializationPage() {
  const [state, loading, error] = usePagesContent('specialization');
  const [localState, setLocalState] = useState({ tabs: [] });
  const [localLoading, setLocalLoading] = useState(false);
  const [toast, setToast] = useState({
    content: '',
    title: '',
    theme: '',
    visible: false,
  });

  function submitSubscription(payload) {
    setLocalLoading(true);
    return Mailer.sendSubscription({ ...payload, course: state.title })
      .then(() => {
        setToast({
          content:
            'Já registrei suas informações, um dos membros da nossa equipe vai entrar em contato com você logo para finalizar sua inscrição!',
          title: 'Sucesso!',
          theme: 'success',
          visible: true,
        });
      })
      .catch(() => {
        setToast({
          content:
            'Não consegui registrar as informações, por favor, atualize a página e tente novamente em alguns instantes!',
          title: 'Desculpe!',
          theme: 'danger',
          visible: true,
        });
      })
      .finally(() => {
        setLocalLoading(false);
      });
  }

  function onToastHidden() {
    setToast(prev => ({ ...prev, visible: false }));
  }

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
      <Toast {...toast} onClose={onToastHidden} />
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
          <Form onSubmit={submitSubscription} loading={localLoading} />
        </S.SpecializationFormContainer>
      </S.SpecializationSectionWrapper>
    </Layout>
  );
}

export default SpecializationPage;
