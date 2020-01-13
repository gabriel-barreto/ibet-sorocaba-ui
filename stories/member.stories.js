import React from 'react';
import { storiesOf } from '@storybook/react';

import MemberCard from '../src/pages/Members/MemberCard';

import { Facebook } from 'styled-icons/boxicons-logos/Facebook';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';
import { AlternateEmail as Email } from 'styled-icons/material/AlternateEmail';

storiesOf('Members', module).add('Card', () => {
  const config = {
    name: 'Lorem Ipsum',
    title: 'Lorem Ipsum pela PUC/SP',
    photo:
      'https://dlbjbjzgnk95t.cloudfront.net/1121000/1121543/52bbb89f3fdf6a633f14a9b1ce7b3fa68c442c05-garlan-rodrigues-law-077.jpg',
    social: [
      { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
      { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
      { icon: Linkedin, label: 'Linkedin', url: 'https://linkedin.com' },
      { icon: Email, label: 'Email', url: 'mailto:dev@entrecliques.com.br' },
    ],
  };
  return <MemberCard {...config} />;
});
