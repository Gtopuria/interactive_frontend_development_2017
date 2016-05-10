import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Navigation from './components/Navigation';
import Game from './components/Game';
import HistoryContainer from './containers/HistoryContainer';
import Information from './components/Information';

export const createRoutes = (history) => () => (
  <Router history={history}>
    <Route path="/" component={Navigation}>
      <IndexRoute component={Game} />
      <Route path="/play" component={Game} />
      <Route path="/pastGames" component={HistoryContainer} />
      <Route path="/about" component={Information} />
    </Route>
  </Router>
);
