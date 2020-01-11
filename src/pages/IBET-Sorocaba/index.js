import React from 'react';

import { Layout } from '../../components';

import AboutSection from './About';

function IBETSorocabaPage() {
  return (
    <Layout title="IBET Sorocaba" featured={false}>
      <AboutSection />
    </Layout>
  );
}

export default IBETSorocabaPage;
