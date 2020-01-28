import React from 'react';

import { usePagesContent } from '../../hooks';

import { Layout, ListIntroCards, Spinner, Structure } from '../../components';

import AboutSection from './About';
import WelcomeSection from './Welcome';

import * as S from './styled';

function HomePage() {
  const [state, loading] = usePagesContent('home');

  return (
    <Layout title="Home" featured={state.featured || {}}>
      <S.SpinnerWrapper visible={loading}>
        <Spinner />
      </S.SpinnerWrapper>
      <>
        <WelcomeSection />
        <AboutSection
          coordinator={state.coordinator || {}}
          content={state.about || ''}
        />
        <ListIntroCards />
        <Structure />
      </>
    </Layout>
  );
}

export default HomePage;
