import React from 'react';

import { usePagesContent } from '../../hooks';

import { Layout, ListIntroCards, Spinner, Structure } from '../../components';

import AboutSection from './About';
import WelcomeSection from './Welcome';

import * as S from './styled';

function HomePage() {
  const [state, loading, error] = usePagesContent('home');

  return (
    <Layout
      title="Home"
      featured={state.featured || {}}
      redirectCondition={error}
    >
      <S.SpinnerWrapper visible={loading}>
        <Spinner />
      </S.SpinnerWrapper>
      <WelcomeSection />
      <AboutSection
        coordinator={state.coordinator || {}}
        content={state.about || ''}
      />
      <ListIntroCards />
      <Structure {...state.structure} />
    </Layout>
  );
}

export default HomePage;
