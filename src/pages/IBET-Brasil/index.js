import React from 'react';

import { usePagesContent } from '../../hooks';

import { FullScreenSpinner, Layout } from '../../components';

import AboutSection from './About';
import UnitsSection from './Units';

function IBETBrasilPage() {
  const [state, loading, error] = usePagesContent('ibet');
  return (
    <Layout title="IBET Brasil" redirectCondition={error}>
      <FullScreenSpinner visible={loading} />
      <AboutSection content={state.content || ''} />
      <UnitsSection units={state.units || []} />
    </Layout>
  );
}

export default IBETBrasilPage;
