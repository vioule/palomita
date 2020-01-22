const React = require("react");
import { connect } from 'react-redux';

import { checkAuthentication } from '../actions/auth';
const mapDispatchToProps = {checkAuthentication};

class App extends React.Component {
  constructor(props) {
    super(props)
  };
  componentDidMount() {
    this.props.checkAuthentication();
  };
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  };
};

export default connect(null, mapDispatchToProps)(App);