import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './styles';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          {Routes.map(each => (
            <Route {...each} />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
