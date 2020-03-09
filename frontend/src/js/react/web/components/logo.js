const React = require("react");
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setMenuOpen } from '../actions/menu';
export const Logo = (props) => { return (
<div className="logo">
  <Link to="/" className="logo-desktop" onClick={()=>props.setMenuOpen(false)}>Palomita</Link>
  <Link to="/" className="logo-phone" onClick={()=>props.setMenuOpen(false)}>P.</Link>
</div>
)};

export default connect(
  null, 
  { setMenuOpen }
)(Logo)