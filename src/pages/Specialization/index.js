import React from 'react';

import { Layout, Tabs } from '../../components';

import Form from './Form';

import * as C from './content';
import * as S from './styled';

function SpecializationPage() {
  return (
    <Layout>
      <S.SpecializationSectionWrapper>
        <div>
          <S.SpecializationTitle>{C.title}</S.SpecializationTitle>
          <Tabs entries={C.tabs} />
        </div>
        <S.SpecializationFormContainer>
          <S.SpecializationFormTitle>
            Garanta seu lugar
          </S.SpecializationFormTitle>
          <Form onSubmit={() => {}} />
        </S.SpecializationFormContainer>
      </S.SpecializationSectionWrapper>
    </Layout>
  );
}

export default SpecializationPage;
