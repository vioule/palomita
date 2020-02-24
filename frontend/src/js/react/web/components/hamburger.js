const React = require("react");
import { connect } from 'react-redux';
import { setMenuOpen } from '../actions/menu';

const Hamburger = (props) => { return (
<button className={"hamburger" + (props.open ? " hamburger-close" : "")} onClick={()=>props.onClick(!props.open)}/>
)};

export default connect(
  state => { return { open: state.menu.open }}, 
  { onClick: setMenuOpen }
)(Hamburger)