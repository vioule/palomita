const React = require("react");
import { Link } from 'react-router-dom';

export default (props) => { return (
  <li className="menu-categorie">
      <Link 
      to={"/"+props.name.toLowerCase()} 
      className="menu-categorie-item menu-categorie-hover"
      onClick={()=>{props.setMenuOpen(!props.open); props.setFilterCategorie(props.name)}}
      >{props.name}</Link>
      <span className="menu-categorie-item menu-categorie-overlay">{props.name}</span>
      <span className="menu-categorie-item menu-categorie-text">{props.name}</span>
  </li>
)};