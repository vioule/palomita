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
        <li className="navbar-li">
          <span className="navbar-number">{this.props.articles}</span><span> Articles</span>
        </li>
        <li className="navbar-item navbar-hover">
          <Link className="navbar-link" to="article/create">Ajouter un article</Link>
        </li>
      </ul>
    </div>
    )
  };
};

export default Navbar;