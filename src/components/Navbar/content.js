import { At as email } from 'styled-icons/boxicons-regular/At';
import { Facebook as facebook } from 'styled-icons/boxicons-logos/Facebook';
import { GraduationCap as student } from 'styled-icons/fa-solid/GraduationCap';
import { Instagram as instagram } from 'styled-icons/fa-brands/Instagram';
import { Linkedin as linkedin } from 'styled-icons/boxicons-logos/Linkedin';
import { Phone as phone } from 'styled-icons/icomoon/Phone';

import brand from '../../assets/brand.png';
import brandSmall from '../../assets/brand-sm.png';

const Icons = { email, facebook, instagram, linkedin, phone, student };

export const brandTitle =
  'IBET - Intstituto Brasileiro de Estudos Tributários de Sorocaba';
export const images = { brand, brandSmall };
export const links = [
  { label: 'Home', to: '/' },
  { label: 'IBET Sorocaba', to: '/ibet-sorocaba' },
  { label: 'IBET Brasil', to: '/ibet-brasil' },
  { label: 'Especialização', to: '/especializacao' },
  { label: 'Mestrado', to: '/mestrado' },
  { label: 'Membros', to: '/membros' },
  { label: 'Inscreva-se', to: '/inscreva-se', featured: true },
];
export const social = [
  {
    label: 'Facebook',
    url: 'https://facebook.com/ibet-sorocaba',
    icon: Icons.facebook,
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/ibet-sorocaba',
    icon: Icons.instagram,
  },
  {
    label: 'Linkedin',
    url: 'https://linkedin.com/ibet-sorocaba',
    icon: Icons.linkedin,
  },
];
export const infos = [
  {
    icon: Icons.email,
    value: 'sod@ibet.com.br',
    url: 'mailto://sod@ibet.com.br',
  },
  {
    icon: Icons.phone,
    value: '+55 15 3202-7783',
    url: 'tel://+55 15 3202-7783',
  },
  {
    icon: Icons.student,
    value: 'Acessar Área de Alunos',
    url: '#',
    featured: true,
  },
];
