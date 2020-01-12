import React from 'react';

import { Layout, ListIntroCards, Structure } from '../../components';

import AboutSection from './About';
import CoordinationSection from './Coordination';

function IBETSorocabaPage() {
  return (
    <Layout title="IBET Sorocaba" featured={false}>
      <AboutSection />
      <CoordinationSection />
      <ListIntroCards />
      <Structure />
    </Layout>
  );
}

export default IBETSorocabaPage;
