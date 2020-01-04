import React from 'react';

import { Layout } from '../../components';

const featured = {
  description: [
    'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos',
    'Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.',
  ],
  label: 'GARANTIR MINHA VAGA',
  subtitle: 'Lorem Ipsum do Mestrado IBET 2020',
  title: 'Mestrado IBET 2020',
  URL: '/',
};

function HomePage() {
  return (
    <Layout featured={featured}>
      <p>Home Page</p>
    </Layout>
  );
}

export default HomePage;
