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
          <span className="navbar-number">{this.props.articles}</span><span> Commentaires</span>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/">Mes commentaires</Link>
        </li>
        <li className="navbar-item">
          <span className="navbar-newcomments"><span className="navbar-number">{this.props.articles}</span><span> Nouveaux Commentaires</span></span>
        </li>
        <li className="navbar-item">
          <span className="navbar-showall">Afficher tous les contenus</span>
        </li>
      </ul>
    </div>
    )
  };
};

export default Navbar;