const React = require("react");
import {render} from 'react-dom';

import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Administration from './components/administration';
import Login from './components/login';
import AuthGuard from './components/hoc/authGuard'

export const store = createStore(Reducer, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/administration" component={AuthGuard(Administration)} />
          <Route exact path="/administration/login" component={Login} />
          <Route path="*"><div>404</div></Route>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
,document.getElementById('app'))