const React = require("react");
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="navbar navbar-light">
      <ul>
        <li className="navbar-item">
          <span className="navbar-number">21</span><span> Articles</span>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/">Ajouter un article</Link>
        </li>
      </ul>
    </div>
    )
  };
};

export default Navbar;