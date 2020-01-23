import brand from '../../assets/brand-negative.png';
import mec from '../../assets/mec-brand.png';

export const location = {
  address: 'Rua Júlio Marcondes Guimarães',
  number: '115',
  complement: '6º andar – sala 605',
  city: 'Sorocaba',
  estate: 'São Paulo',
  country: 'Brasil',
};

export const images = { brand, mec };

export const sitemap = [
  { label: 'Home', to: '/' },
  { label: 'IBET Sorocaba', to: '/ibet-sorocaba' },
  { label: 'IBET Brasil', to: '/ibet-brasil' },
  { label: 'Especialização', to: '/especializacao' },
  { label: 'Mestrado', to: '/mestrado' },
  { label: 'Professores', to: '/membros' },
  { label: 'Contato', to: '/contato' },
  { label: 'Área de Alunos', to: '#', external: true },
];
