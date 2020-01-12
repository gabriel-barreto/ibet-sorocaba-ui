import React from 'react';

import { Layout } from '../../components';

import AboutSection from './About';
import CoordinationSection from './Coordination';

function IBETSorocabaPage() {
  return (
    <Layout title="IBET Sorocaba" featured={false}>
      <AboutSection />
      <CoordinationSection />
    </Layout>
  );
}

export default IBETSorocabaPage;
