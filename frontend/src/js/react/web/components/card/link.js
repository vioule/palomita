const React = require("react");
import { Link } from 'react-router-dom';
export default (props) => (
<div className="link">
  <Link to={"/article/"+props.id}>Lire plus</Link>
</div>
);