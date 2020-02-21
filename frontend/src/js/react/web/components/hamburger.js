const React = require("react");
import { connect } from 'react-redux';
import { setMenuOpen } from '../actions/menu';

const Hamburger = (props) => { return (
<button className="hamburger-wrapper" onClick={()=>props.onClick(!props.open)}>
  <div className={"hamburger" + (props.open ? " hamburger-close" : "")}/>
</button>
)};

export default connect(
  state => { return { open: state.menu.open }}, 
  { onClick: setMenuOpen }
)(Hamburger)