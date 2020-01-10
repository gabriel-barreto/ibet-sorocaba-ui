import { At as Email } from 'styled-icons/boxicons-regular/At';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';
import { Instagram } from 'styled-icons/fa-brands/Instagram';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';
import { Phone } from 'styled-icons/icomoon/Phone';

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

export const social = [
  {
    label: 'Facebook',
    url: 'https://facebook.com/ibet-sorocaba',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/ibet-sorocaba',
    icon: Instagram,
  },
  {
    label: 'Linkedin',
    url: 'https://linkedin.com/ibet-sorocaba',
    icon: Linkedin,
  },
];
export const infos = [
  {
    icon: Email,
    value: 'sod@ibet.com.br',
    url: 'mailto://sod@ibet.com.br',
  },
  {
    icon: Phone,
    value: '+55 15 3202-7783',
    url: 'tel://+55 15 3202-7783',
  },
];
