import React from 'react';
import { HTMLContainer } from '../../components';

import { SpecializationSubtitle } from './styled';
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

export const title = 'Especialização em Direito Tributário';
export const tabs = [
  {
    label: 'Estrutura do Programa',
    component: () => (
      <>
        <HTMLContainer content="<p>Mais que contribuição advocatícia, o Direito Tributário representa a base da organização societária. Por meio de seus preceitos, este ramo de conhecimento norteia as principais decisões que interferem efetivamente na economia do país, investimentos e, por conseguinte, em seu desempenho e margens de futuro. Portanto, a busca deste conhecimento pelo profissional do Direito é essencial, como contributo ao sucesso e, ao mesmo tempo, um serviço à sociedade.</p>" />
        <SpecializationSubtitle>Temário</SpecializationSubtitle>
        <Themes entries={theme} />
      </>
    ),
  },
  {
    label: 'Investimento',
    component: () => (
      <HTMLContainer content="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam deserunt dignissimos hic ipsam maxime minima, tempore tenetur! Blanditiis dolorem doloribus exercitationem fugiat id nisi officiis qui, reprehenderit vel veritatis.</p>" />
    ),
  },
  {
    label: 'Coordenação',
    component: () => (
      <HTMLContainer content="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt doloremque doloribus eaque hic illo impedit iusto, maiores minima necessitatibus perspiciatis recusandae totam vel. Architecto, eveniet, impedit? Harum optio, totam.</p>" />
    ),
  },
];
