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
          <li className={this.props.location.pathname.includes("article") ? "menu-item" : "menu-item menu-off"}>
            <img className="menu-item-icon" src="/img/backoffice.svg#articles-white"/>
            <Link className="menu-item-link" to="/administration/articles">Articles</Link></li>
          <li className={this.props.location.pathname.includes("commentaire") ? "menu-item" : "menu-item menu-off"}>
            <img className="menu-item-icon" src="/img/backoffice.svg#commentaires-white"/>
            <Link className="menu-item-link" to="/administration/commentaires">Commentaires</Link></li>
          <li className={this.props.location.pathname.includes("statistiques") ? "menu-item" : "menu-item menu-off"}>
          <img className="menu-item-icon" src="/img/backoffice.svg#statistics-white"/>
            <Link className="menu-item-link" to="/administration/statistiques">Statistiques</Link></li>
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