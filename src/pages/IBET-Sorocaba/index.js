import React from 'react';

import { usePagesContent } from '../../hooks';

import {
  FullScreenSpinner,
  Layout,
  ListIntroCards,
  Structure,
} from '../../components';

import AboutSection from './About';
import CoordinationSection from './Coordination';

function IBETSorocabaPage() {
  const [state, loading, error] = usePagesContent('about');
  return (
    <Layout title="Sobre nós" featured={false} redirectCondition={error}>
      <FullScreenSpinner visible={loading} />
      <AboutSection content={state.content || ''} />
      <CoordinationSection coordinators={state.coordination} />
      <ListIntroCards />
      <Structure {...state.structure} />
    </Layout>
  );
}

export default IBETSorocabaPage;
