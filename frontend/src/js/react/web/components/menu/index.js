const React = require("react");
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Infos, Categories } from "./side";

class Menu extends React.Component {
  render(){
    return (
    <CSSTransition
      in={this.props.open}
      timeout={2200}
      classNames={"menu"}
    >
      <div className="menu">
        <Categories/>
        <Infos/>
      </div>
    </CSSTransition>
    )
  };
};

export default connect(
  state => { return { open: state.menu.open }}, 
  null
)(Menu)