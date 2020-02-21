const React = require("react");
import { connect } from 'react-redux';
import { Side, Categories } from "./side";

class Menu extends React.Component {
  render(){
    return (
    <div className={"menu" + (this.props.open ? " menu-visible" : "")}>
      <Categories/>
      <Side/>
    </div>
    )
  };
};

export default connect(
  state => { return { open: state.menu.open }}, 
  null
)(Menu)