import { Link } from "react-router-dom";

const React = require("react");

export default () => (
<div className="construction">
  <span className="construction-logo">P.</span>
  <div className="construction-center marge">
    <h1 className="construction-title">Vous êtes perdu ?</h1>
    <h2 className="construction-info">La page que vous demandez est introuvable.</h2>
    <Link to='/home' className="construction-link border-bottom-center">Revenir sur le blog.</Link>
  </div>
</div>
);