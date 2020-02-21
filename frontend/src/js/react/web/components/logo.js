const React = require("react");
import { Link } from 'react-router-dom';
export default () => { return (
<div className="logo">
  <Link to="/" className="logo-desktop">Palomita</Link>
  <Link to="/" className="logo-phone">P.</Link>
</div>
)}