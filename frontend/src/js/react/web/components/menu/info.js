const React = require("react");
export default (props) => (
<li className="menu-info menu-info-item menu-anim">
  <span className="menu-info-span menu-info-hover">{props.name}</span>
  <span className="menu-info-span menu-info-overlay">{props.name}</span>
  <span className="menu-info-span menu-info-text">{props.name}</span>
</li>
);