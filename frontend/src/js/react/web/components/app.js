const React = require("react");
import {render} from 'react-dom';

import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import Reducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';

export const store = createStore(Reducer, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*"><div>404</div></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
,document.getElementById('app'))