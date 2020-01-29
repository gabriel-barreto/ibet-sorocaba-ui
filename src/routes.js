import React from 'react';

import {
  Contact,
  IBETBrasil,
  IBETSorocaba,
  Home,
  Masters,
  Members,
  NotFound,
  Specialization,
} from './pages';

export default [
  {
    name: 'home',
    title: '',
    path: '/',
    component: props => <Home {...props} />,
    exact: true,
  },
  {
    title: 'IBET Sorocaba',
    name: 'ibet-sorocaba',
    path: '/ibet-sorocaba',
    component: props => <IBETSorocaba {...props} />,
  },
  {
    title: 'IBET Brasil',
    name: 'ibet-brasil',
    path: '/ibet-brasil',
    component: props => <IBETBrasil {...props} />,
  },
  {
    title: 'Especialização',
    name: 'especializacao',
    path: '/especializacao',
    component: props => <Specialization {...props} />,
  },
  {
    title: 'Mestrado',
    name: 'mestrado',
    path: '/mestrado',
    component: props => <Masters {...props} />,
  },
  {
    title: 'Membros',
    name: 'members',
    path: '/membros',
    component: props => <Members {...props} />,
  },
  {
    title: 'Contato',
    name: 'contact',
    path: '/contato',
    component: props => <Contact {...props} />,
  },
  {
    path: '/erro',
    component: props => <NotFound {...props} />,
  },
];
