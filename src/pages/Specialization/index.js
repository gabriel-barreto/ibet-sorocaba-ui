import React from 'react';

import { Layout, Tabs } from '../../components';

import * as C from './content';

function SpecializationPage() {
  return (
    <Layout>
      <Tabs entries={C.tabs} />
    </Layout>
  );
}

export default SpecializationPage;
