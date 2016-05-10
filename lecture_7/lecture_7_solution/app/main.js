import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import gameStatePublisher from './middlewares/GameStatePublisher';
import actionsPerMinute from './middlewares/ActionsPerMinuteLogger';
import reducer from './reducers/index';
import { createRoutes } from './Routes';
import { webSocketConnectionRequested } from './actions/WebSocketActions';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory), gameStatePublisher, actionsPerMinute),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const Routes = createRoutes(syncHistoryWithStore(browserHistory, store));

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('container')
);

store.dispatch(webSocketConnectionRequested());
