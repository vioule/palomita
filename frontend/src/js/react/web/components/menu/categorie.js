const React = require("react");

export default (props) => { return (
  <li className="menu-categorie">
    <span className="menu-categorie-item menu-categorie-hover">{props.name}</span>
    <span className="menu-categorie-item menu-categorie-overlay">{props.name}</span>
    <span className="menu-categorie-item menu-categorie-text">{props.name}</span>
  </li>
)};