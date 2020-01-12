import React from 'react';

import { Layout } from '../../components';

import AboutSection from './About';
import UnitsSection from './Units';

function IBETBrasilPage() {
  return (
    <Layout title="IBET Brasil">
      <AboutSection />
      <UnitsSection />
    </Layout>
  );
}

export default IBETBrasilPage;
