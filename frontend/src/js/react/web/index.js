const React = require("react");
import {render} from 'react-dom';

import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Root from './components/root';
import notFound from './components/notFound';

export const store = createStore(Reducer, applyMiddleware(thunkMiddleware))


async function loadPolyfills() {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }
}

loadPolyfills();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/notfound" component={notFound} />
          <Route path="*" component={Root} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
,document.getElementById('app'))