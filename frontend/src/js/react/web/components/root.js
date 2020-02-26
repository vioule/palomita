const React = require("react");
import { Route, Switch, Redirect } from 'react-router-dom';
import Logo from './logo';
import Hamburger from './hamburger';
import Menu from './menu/';
import Home from './home/';
import Contact from './contact/';
import Footer from './footer';
import Article from './article';

export default class Root extends React.Component {
  render() {
    return (
      <>
        <Logo/>
        <Hamburger/>
        <main className="main">
          <Switch>
            {
            ["/home","/deco","/style","/cuisine","/voyages"]
            .map(el=><Route key={el} exact path={el} component={Home} />)
            }
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/article/:articleID" component={Article} />
            <Route path="*">
              <Redirect to="/notfound"/>
            </Route>
          </Switch>
          <Menu/>
        </main>
        <Footer />
      </>
    )
  };
};