const React = require("react");
import { connect } from 'react-redux';
import { userLogout as logout } from '../../actions/auth';

const mapDispatchToProps = { logout };

class Menu extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="menu menu-dark">
      <h1 className="menu-title">Palomita<br/><span className="menu-subtitle">Backoffice</span></h1>
      <div className="menu-avatar"></div>
      <span className="menu-user">{this.props.user.username}</span>
      <button className="menu-btn" onClick={this.props.logout}>Déconnexion</button>
    </div>
    )
  };
};

export default connect(null, mapDispatchToProps)(Menu);