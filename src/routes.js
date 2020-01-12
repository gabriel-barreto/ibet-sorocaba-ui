import React from 'react';

import { IBETBrasil, IBETSorocaba, Home } from './pages';

export default [
  {
    name: 'home',
    path: '/',
    component: props => <Home {...props} />,
    exact: true,
  },
  {
    name: 'ibet-sorocaba',
    path: '/ibet-sorocaba',
    component: props => <IBETSorocaba {...props} />,
  },
  {
    name: 'ibet-brasil',
    path: '/ibet-brasil',
    component: props => <IBETBrasil {...props} />,
  },
];
