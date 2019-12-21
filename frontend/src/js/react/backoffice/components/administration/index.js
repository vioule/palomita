const React = require("react");
import { connect } from 'react-redux';
import { userLogout as logout } from '../../actions/auth';
import Menu from '../menu';

const mapDispatchToProps = { logout };

class Administration extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div>
      <Menu {...this.props} />
    </div>
    )
  };
};

export default connect(null, mapDispatchToProps)(Administration);