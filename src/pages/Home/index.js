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
    <Layout title="Home" featured={state.featured || {}}>
      <S.SpinnerWrapper visible={loading}>
        <Spinner />
      </S.SpinnerWrapper>
      {!$Object.isEmpty(state) ? (
        <>
          <WelcomeSection />
          <AboutSection
            coordinator={state.coordinator || {}}
            content={state.about || ''}
          />
          <ListIntroCards />
          <Structure />
        </>
      ) : (
        <Redirect from="*" to="/erro" />
      )}
    </Layout>
  );
}

export default HomePage;
