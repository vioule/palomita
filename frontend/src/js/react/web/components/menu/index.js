const React = require("react");
import { connect } from 'react-redux';
import { setMenuOpen } from '../../actions/menu';
import { setFilterCategorie } from '../../actions/filter';
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
      <div className={"menu" + (!this.props.open ? " menu-hidden" : "")}>
        <Categories {...this.props}/>
        <Infos {...this.props}/>
      </div>
    </CSSTransition>
    )
  };
};

export default connect(
  state => { return { open: state.menu.open }}, 
  { setFilterCategorie, setMenuOpen }
)(Menu)