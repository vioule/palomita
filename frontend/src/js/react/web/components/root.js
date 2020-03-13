const React = require("react");
import { Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Logo from './logo';
import Hamburger from './hamburger';
import Menu from './menu/';
import Home from './home/';
import Contact from './contact/';
import Legals from './legals';
import UnderConstruction from './underConstruction';
import Footer from './footer';
import Article from './article';

export default class Root extends React.Component {
  render() {
    return (
      <>
        <Logo/>
        <Hamburger/>
        <main className="main">
          <TransitionGroup>
            <CSSTransition
            key={this.props.location.key}
            classNames="fade"
            timeout={1000}
            >
              <Switch location={this.props.location}>
                {
                ["/home","/deco","/style","/cuisine","/voyages"]
                .map(el=><Route key={el} exact path={el} component={Home} />)
                }
                <Route exact path="/contact" component={UnderConstruction} />
                <Route exact path="/about" component={UnderConstruction} />
                <Route exact path="/legals" component={Legals} />
                <Route exact path="/article/:articleID" component={Article} />
                <Route exact path="/">
                  <Redirect to="/home"/>
                </Route>
                <Route path="*">
                  <Redirect to="/notfound"/>
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Menu/>
        </main>
        <Footer />
      </>
    )
  };
};