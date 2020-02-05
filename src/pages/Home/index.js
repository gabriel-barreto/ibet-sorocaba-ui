import React from 'react';

import { usePagesContent } from '../../hooks';

import {
  FullScreenSpinner,
  Layout,
  ListIntroCards,
  Structure,
} from '../../components';

import AboutSection from './About';
import WelcomeSection from './Welcome';

function HomePage() {
  const [state, loading, error] = usePagesContent('home');

  return (
    <Layout
      title="Home"
      featured={state.featured || {}}
      redirectCondition={error}
    >
      <FullScreenSpinner visible={loading} />
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
