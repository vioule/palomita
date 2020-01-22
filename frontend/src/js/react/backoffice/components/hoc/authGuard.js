const React = require("react");
import { connect } from 'react-redux';

export default (OriginalComponent) => {
  const mapStateToProps = state => { return {...state.login} };

  class MixedComponent extends React.Component {
    checkAuth() {
      if (this.props.isAuthenticated===false) {
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
      if (this.props.isAuthenticated) {
        return <OriginalComponent {...this.props} />;
      } else {
        return <div></div>
      }
    };
  };

  return connect(mapStateToProps)(MixedComponent);
};