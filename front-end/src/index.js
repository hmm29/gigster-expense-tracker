import 'app/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// React router
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';

// Redux configurations
import configureStore from 'app/store';
import createRoutes from 'app/routes';
import { selectLocationState } from 'containers/App/selectors';

import App from 'containers/App';
import createRoutes from 'app/routes';
import login from 'login';

const initialState = {};
const store = configureStore(initialState, browserHistory);

auth.setStore(store);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

// Set up the router
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
      }
    />
  </Provider>,
  document.getElementById('root'),
);
