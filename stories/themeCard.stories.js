import React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeCard from '../src/pages/Specialization/Theme/ThemeCard';
import Theme from '../src/pages/Specialization/Theme';

storiesOf('Theme', module)
  .add('Theme Card', () => {
    const config = {
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
    };
    return <ThemeCard {...config} />;
  })
  .add('Default', () => {
    const entries = [
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
    return <Theme entries={entries} />;
  });
