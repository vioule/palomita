const React = require("react");
import { Link } from 'react-router-dom';

export default (props) => (
<li className="menu-info menu-info-item menu-anim">
  <Link 
      to={"/"+props.link} 
      className="menu-info-span menu-info-hover"
      onClick={()=>props.setMenuOpen(!props.open)}
      >{props.name}</Link>
  <span className="menu-info-span menu-info-overlay">{props.name}</span>
  <span className="menu-info-span menu-info-text">{props.name}</span>
</li>
);