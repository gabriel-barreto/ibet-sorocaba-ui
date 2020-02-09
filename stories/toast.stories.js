import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';

import { Toast } from '../src/components';

storiesOf('Toast', module).add('Default', () => {
  const content = text(
    'Content',
    'Silvio Santos Ipsum É dinheiro ou não éam? Ma vale dérreaisam? Você veio da caravana de ondeammm? Boca sujuam',
  );
  const theme = select(
    'Theme',
    { Sucesso: 'success', Erro: 'danger' },
    'success',
  );
  const title = text('Title', 'Lorem Ipsum');
  const visible = boolean('Is Visible?', true);
  const onCloseToast = action('Toast :: close');

  return (
    <Toast
      title={title}
      content={content}
      theme={theme}
      visible={visible}
      onClose={onCloseToast}
    />
  );
});
