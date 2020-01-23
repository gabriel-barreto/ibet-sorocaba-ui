import React from 'react';
import { HTMLContainer } from '../../components';

import { SpecializationSubtitle } from './styled';
import Coordination from './Coordination';
import Themes from './Theme';

const theme = [
  {
    title: 'Tributo e Segurança Jurídica',
    items: [
      'Direito tributário e o conceito de tributo',
      'Espécies tributárias',
      'Fontes do direito tributário',
      'Interpretação, validade, vigência e eficácia das normas tributárias',
      'Segurança jurídica e processo: recursos, ação rescisória e coisa julgada',
      'Regra-matriz de incidência – hipótese tributária',
      'Sanções, crimes e presunções tributárias',
    ],
  },
  {
    title: 'Incidência e Crédito Tributário',
    items: [
      'Isenções tributárias e a regra-matriz de incidência tributária',
      'Crédito tributário, lançamento e espécies de lançamento tributário',
      'Ações tributárias: declaratória, anulatória, consignação em pagamento, embargos à execução e exceção de pré-executividade',
      'Extinção da obrigação tributária, compensação e repetição do indébito',
      'Imposto sobre a renda – pessoa física',
      'ISS',
      'ICMS – mercadorias',
    ],
  },
  {
    title: 'Exigibilidade do Crédito Tributário',
    items: [
      'Procedimento administrativo fiscal',
      'Suspensão da exigibilidade do crédito tributário, MS e liminares',
      'Decadência e prescrição em matéria tributária',
      'Realização da dívida ativa: execução fiscal e medida cautelar fiscal',
      'IPI e IOF',
      'ICMS – serviços',
      'Imposto sobre a renda – pessoa jurídica',
    ],
  },
  {
    title: 'Controle da Incidência Tributária',
    items: [
      'A regra-matriz de incidência, obrigação tributária e sujeição passiva',
      'Controle processual da incidência: declaração de inconstitucionalidade',
      'Sistema tributário, competência e princípios',
      'Imunidade e normas gerais de direito tributário',
      'Tributação Internacional',
      'IPTU, ITR e IPVA',
      'Contribuições',
    ],
  },
  {
    title: 'Orientação de Monografia',
    items: [
      'Módulo temático com 30 horas/aula para orientação do aluno na elaboração do trabalho de conclusão do curso.',
    ],
  },
];

const coordination = [
  {
    coord: true,
    name: 'Priscila de Souza',
    title: 'Mestre em Direito Tributário pela PUC/SP',
    photo:
      'https://dlbjbjzgnk95t.cloudfront.net/1121000/1121543/52bbb89f3fdf6a633f14a9b1ce7b3fa68c442c05-garlan-rodrigues-law-077.jpg',
    social: [],
  },
  {
    coord: true,
    name: 'Rodrigo Dalla Pria',
    title:
      'Doutor em Direito Processual Civil e Mestre em Direito Tributário pela PUC/SP',
    photo:
      'https://dlbjbjzgnk95t.cloudfront.net/1121000/1121543/52bbb89f3fdf6a633f14a9b1ce7b3fa68c442c05-garlan-rodrigues-law-077.jpg',
    social: [
      {
        title: 'Lattes',
        url: 'http://lattes.cnpq.br/5896557286341364',
        icon: null,
      },
    ],
  },
];

export const title = 'Especialização em Direito Tributário';
export const tabs = [
  {
    label: 'Estrutura do Programa',
    component: () => (
      <>
        <HTMLContainer
          content={`
            <p>A Pós-Graduação Lato Sensu oferecida pelo Instituto Brasileiro de Estudos Tributários - IBET - é, reconhecidamente, o melhor e mais prestigiado Curso de Especialização em Direito Tributário do Brasil, sendo altamente valorizado pelos mais renomados escritórios que atuam na área.</p>
            <p>O Curso é realizado pelo IBET, sendo certificado pelo MEC.</p>
            <p>Seu corpo docente é composto pelos mais ilustres acadêmicos e profissionais do Direito Tributário do país e seu método de aprendizado, totalmente PRESENCIAL, caracteriza-se pela combinação de aulas-debate (seminários) e aulas-conferência (expositivas), estimulando o aluno a desenvolver o senso crítico e a autonomia de raciocínio.</p>
            <p>O Curso é composto por 5 (cinco) módulos semestrais, sendo 4 módulos temáticos e 1 módulo de monografia, este especificamente destinado à orientação na elaboração da monografia de conclusão, num total de 390 horas/aula.</p>
            <p>Os módulos temáticos, no total de 4 (quatro), são compostos por 7 seminários e 7 conferências (14 aulas).</p>
            <p>No ato da matrícula será oferecido o programa completo do módulo, contendo os seminários de discussão compostos por questões teóricas e práticas, com bibliografia específica, as quais deverão ser resolvidas e entregues a cada duas semanas.</p>
            <p>Mais que contribuição advocatícia, o Direito Tributário representa a base da organização societária. Por meio de seus preceitos, este ramo de conhecimento norteia as principais decisões que interferem efetivamente na economia do país, investimentos e, por conseguinte, em seu desempenho e margens de futuro. Portanto, a busca deste conhecimento pelo profissional do Direito é essencial, como contributo ao sucesso e, ao mesmo tempo, um serviço à sociedade.</p>
            <p>O Curso de Especialização em Direito Tributário é uma pós-graduação lato sensu, com duração de 5 semestres, com carga horária de 390 horas/aula.</p>
        `}
        />
        <SpecializationSubtitle>Temário</SpecializationSubtitle>
        <Themes entries={theme} />
      </>
    ),
  },
  {
    label: 'Investimento',
    component: () => (
      <HTMLContainer
        content={`
          <h3>Descontos especiais para grupos de alunos</h3>
          <p>10% para 2 alunos</p>
          <p>15% para grupos de 3 alunos</p>
          <p>20% para grupos de mais de 5 alunos</p>
      `}
      />
    ),
  },
  {
    label: 'Coordenação',
    component: () => (
      <>
        <HTMLContainer content="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt doloremque doloribus eaque hic illo impedit iusto, maiores minima necessitatibus perspiciatis recusandae totam vel. Architecto, eveniet, impedit? Harum optio, totam.</p>" />
        <Coordination entries={coordination} />
      </>
    ),
  },
];
