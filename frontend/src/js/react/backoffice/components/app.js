const React = require("react");
import { connect } from 'react-redux';

import { checkAuthentication } from '../actions/auth';
import { setCsrfToken } from '../actions/csrf';
const mapStateToProps = state => { return { _csrf: state._csrf } };
const mapDispatchToProps = {checkAuthentication, setCsrfToken};

class App extends React.Component {
  constructor(props) {
    super(props)
  };
  componentDidMount() {
    this.props.checkAuthentication();
    this.props.setCsrfToken(_csrf);
  };
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);