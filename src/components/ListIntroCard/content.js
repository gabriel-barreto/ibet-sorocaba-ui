import React from 'react';

import { Certification as SpecializationIcon } from 'styled-icons/boxicons-solid/Certification';
import { Award as MastersIcon } from 'styled-icons/fa-solid/Award';
import { UserTie as TeacherIcon } from 'styled-icons/fa-solid/UserTie';

import MastersBg from '../../assets/masters-card-bg.jpg';
import SpecializationBg from '../../assets/specialization-card-bg.jpg';
import TeachersBg from '../../assets/teachers-card-bg.jpg';

export const entries = [
  {
    bg: SpecializationBg,
    icon: <SpecializationIcon size={64} />,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    title: 'Especalização',
    slug: '/',
  },
  {
    bg: MastersBg,
    icon: <MastersIcon size={64} />,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    title: 'Mestrado',
    slug: '/',
  },
  {
    bg: TeachersBg,
    icon: <TeacherIcon size={64} />,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    title: 'Professores',
    slug: '/',
  },
];
