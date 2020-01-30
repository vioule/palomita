const React = require("react");
import { connect } from 'react-redux';
import { userLogout as logout } from '../../actions/auth';
import { showMenu } from '../../actions/menu';
import { Link } from 'react-router-dom';

const mapDispatchToProps = { logout, showMenu };
const mapStateToProps = state => {
  return {
    menu: state.menu
  } 
};

class Menu extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="menu-dark">
      <nav className={this.props.menu.open ? "menu menu-visible" : "menu"}>
        <h1 className="menu-title">Palomita<br/><span className="menu-subtitle">Backoffice</span></h1>
        <div className="menu-avatar"></div>
        <span className="menu-user">{this.props.user.username} <span className="menu-off">({this.props.user.role.name})</span></span>
        <button className="menu-btn" onClick={this.props.logout}>déconnexion</button>
        <ul className="menu-items">
          <li>
            <Link className={this.props.location.pathname.includes("article") ? "menu-item" : "menu-item menu-off"} to="/administration/articles">
            <img className="menu-item-icon" src="/img/backoffice.svg#articles-white"/>Articles
            </Link>
          </li>
          <li>
            <Link className={this.props.location.pathname.includes("commentaire") ? "menu-item" : "menu-item menu-off"} to="/administration/commentaires">
            <img className="menu-item-icon" src="/img/backoffice.svg#commentaires-white"/>Commentaires
            </Link>
          </li>
          <li>
            <Link className={this.props.location.pathname.includes("statistiques") ? "menu-item" : "menu-item menu-off"} to="/administration/statistiques">
            <img className="menu-item-icon" src="/img/backoffice.svg#statistiques-white"/>Statistiques
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={()=>this.props.showMenu(this.props.menu.open)} className={this.props.menu.open ? "menu-btn-phone menu-visible" : "menu-btn-phone"}>
        <div className={this.props.menu.open ? "hamburger hamburger-close" : "hamburger"}></div>
      </button>
    </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);