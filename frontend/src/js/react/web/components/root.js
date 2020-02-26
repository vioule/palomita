const React = require("react");
import { Route, Switch, Redirect } from 'react-router-dom';
import Logo from './logo';
import Hamburger from './hamburger';
import Menu from './menu/';
import Home from './home/';
import Contact from './contact/';

export default class Root extends React.Component {
  render() {
    return (
      <>
        <Logo/>
        <Hamburger/>
        <main className="content">
          <Switch>
            {
            ["/home","/deco","/style","/cuisine","/voyages"]
            .map(el=><Route key={el} exact path={el} component={Home} />)
            }
            <Route exact path="/contact" component={Contact} />
            <Route path="*">
              <Redirect to="/notfound"/>
            </Route>
          </Switch>
          <Menu/>
        </main>
      </>
    )
  };
};