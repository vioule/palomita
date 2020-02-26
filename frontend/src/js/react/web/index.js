const React = require("react");
import {render} from 'react-dom';

import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './components/app';
import Root from './components/root';

export const store = createStore(Reducer, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/notfound"><div>404</div></Route>
          <Route path="*" component={Root} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
,document.getElementById('app'))