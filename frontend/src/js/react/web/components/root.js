const React = require("react");
import Logo from './logo';
import Hamburger from './hamburger';
import Menu from './menu/';

export default class Root extends React.Component {
  render() {
    return (
      <>
        <Logo/>
        <Hamburger/>
        <main className="content">
          <Menu/>
        </main>
      </>
    )
  };
};