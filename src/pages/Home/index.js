import React from 'react';

import { Contact, Layout, ListIntroCards, Structure } from '../../components';

import AboutSection from './About';
import WelcomeSection from './Welcome';

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

const aboutContent = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
];
const coordinator = {
  name: 'Rodrigo Dalla Pria',
  position: 'Coordenador do Curso de Especialização em Direito Tributário',
  title: 'Mestre e doutor pela PUC/SP',
  photo: 'https://live.staticflickr.com/5121/5351236619_5fefdc7123.jpg',
};

function HomePage() {
  return (
    <Layout featured={featured}>
      <WelcomeSection />
      <AboutSection coordinator={coordinator} content={aboutContent} />
      <ListIntroCards />
      <Structure />
      <Contact />
    </Layout>
  );
}

export default HomePage;
