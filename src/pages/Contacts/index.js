import React from 'react';

import { Input, Layout } from '../../components';

import * as C from './content';
import * as S from './styled';

function ContactPage() {
  return (
    <Layout>
      <S.ContactFormWrapper>
        <S.ContactForm method="POST" onSubmit={() => {}}>
          {C.fields.map(each => (
            <Input {...each} key={each.name} onInput={() => {}} />
          ))}
          <S.ContactFormSubmitButton type="Submit">
            Enviar minha mensagem
          </S.ContactFormSubmitButton>
        </S.ContactForm>
      </S.ContactFormWrapper>
    </Layout>
  );
}

export default ContactPage;
