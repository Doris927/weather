import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import { IconFontGlobal } from 'iconfont/style';
import { GlobalStyle } from './style';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <GlobalStyle />
    <IconFontGlobal />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </ConnectedRouter>
);

export default hot(module)(App);
