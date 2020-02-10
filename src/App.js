import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './styles';

import Routes from './routes';

import { ContactsProvider } from './context';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ContactsProvider>
          <Switch>
            {Routes.map(each => (
              <Route key={each.name} {...each} />
            ))}
            <Redirect from="*" to="/" />
          </Switch>
        </ContactsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
