import React, { useState } from 'react';

import { Mailer } from '../../services';
import { $Operators } from '../../utils';

import { FullScreenSpinner, Input, Layout, Toast } from '../../components';

import * as C from './content';
import * as S from './styled';

const INITAL_STATE = { email: '', name: '', phone: '', subject: '' };
const TOAST_INITIAL_STATE = {
  content: '',
  title: '',
  theme: '',
  visible: false,
};
function ContactPage() {
  const [state, setState] = useState(INITAL_STATE);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(TOAST_INITIAL_STATE);

  function submitRequest() {
    setLoading(true);
    return Mailer.sendContact(state)
      .then(() =>
        setToast({
          visible: true,
          title: 'Sucesso!',
          content: 'Sua mensagem foi entregue com sucesso!',
          theme: 'success',
        }),
      )
      .catch(() =>
        setToast({
          visible: true,
          title: 'Desculpe!',
          content:
            'Não consegui entregar sua mensagem, por favor, aguarde alguns instantes e tente novamente!',
          theme: 'danger',
        }),
      )
      .finally(() => {
        setLoading(false);
      });
  }

  function onToastHidden() {
    setToast(prev => ({ ...prev, visible: false }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    const debouncedFn = $Operators.debounce(500, submitRequest);
    return debouncedFn();
  }

  function onInputHandler(key, value) {
    const entry = Object.fromEntries([[key, value]]);
    setState(prev => ({ ...prev, ...entry }));
  }

  return (
    <Layout>
      <FullScreenSpinner visible={loading} />
      <Toast {...toast} onClose={onToastHidden} />
      <S.ContactFormWrapper>
        <S.ContactForm method="POST" onSubmit={onSubmitHandler}>
          {C.fields.map(each => (
            <Input
              {...each}
              key={each.name}
              onInput={v => onInputHandler(each.name, v)}
            />
          ))}
          <S.ContactFormSubmitButton
            type="Submit"
            disabled={loading || toast.visible}
          >
            Enviar minha mensagem
          </S.ContactFormSubmitButton>
        </S.ContactForm>
      </S.ContactFormWrapper>
    </Layout>
  );
}

export default ContactPage;
