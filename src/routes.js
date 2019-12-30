import React from 'react';

import { Home } from './pages';

export default [
  {
    name: 'home',
    path: '/',
    component: props => <Home {...props} />,
    exact: true,
  },
];
