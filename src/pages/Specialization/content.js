import React from 'react';
import { HTMLContainer } from '../../components';

export const tabs = [
  {
    label: 'Estrutura do Programa',
    component: () => (
      <HTMLContainer content="<p>Mais que contribuição advocatícia, o Direito Tributário representa a base da organização societária. Por meio de seus preceitos, este ramo de conhecimento norteia as principais decisões que interferem efetivamente na economia do país, investimentos e, por conseguinte, em seu desempenho e margens de futuro. Portanto, a busca deste conhecimento pelo profissional do Direito é essencial, como contributo ao sucesso e, ao mesmo tempo, um serviço à sociedade.</p>" />
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
