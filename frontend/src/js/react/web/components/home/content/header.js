const React = require("react");

export default (props) => (
<div className="header">
  <span className="categorie">{props.categorie}</span>
  <span className="info"><span className="number">{props.count}</span> article{props.count>1?"s":""}</span>
</div>
);