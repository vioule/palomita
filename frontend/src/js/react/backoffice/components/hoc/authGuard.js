const React = require("react");
import { connect } from 'react-redux';

export default (OriginalComponent) => {
  const mapStateToProps = state => { return {...state.login} };

  class MixedComponent extends React.Component {
    checkAuth() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/administration/login');
      }
    };
    componentDidMount() {
      this.checkAuth();
    };
    componentDidUpdate() {
      this.checkAuth();
    };
    render() {
      return <OriginalComponent {...this.props} />;
    };
  };

  return connect(mapStateToProps)(MixedComponent);
};