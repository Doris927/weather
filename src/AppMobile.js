import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Route, Switch } from 'react-router-dom';
import HomeMobile from 'pages/HomeMobile';
import { IconFontGlobal } from 'iconfont/style';
import { GlobalStyle } from './style';

const AppMobile = ({ history }) => (
  <ConnectedRouter history={history}>
    <GlobalStyle />
    <IconFontGlobal />
    <Switch>
      <Route path="/" component={HomeMobile} />
    </Switch>
  </ConnectedRouter>
);

export default hot(module)(AppMobile);
