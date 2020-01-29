import React from 'react';
import { Redirect } from 'react-router-dom';

import { usePagesContent } from '../../hooks';

import { $Object } from '../../utils';

import { Layout, ListIntroCards, Spinner, Structure } from '../../components';

import AboutSection from './About';
import WelcomeSection from './Welcome';

import * as S from './styled';

function HomePage() {
  const [state, loading] = usePagesContent('home');

  return (
    <Layout
      title="Home"
      featured={state.featured || {}}
      redirectCondition={$Object.isEmpty(state)}
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
      <Structure />
    </Layout>
  );
}

export default HomePage;
