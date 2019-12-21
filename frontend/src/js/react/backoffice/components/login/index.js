const React = require("react");
import { connect } from 'react-redux';
import { setCsrfToken } from '../../actions/csrf';
import { userLogin as onSubmit } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
const mapStateToProps = state => { 
  return { 
  _csrf: state._csrf,
  isAuthenticated: state.login.isAuthenticated,
  errorMessage: state.login.errorMessage
  } 
};
const mapDispatchToProps = {
  setCsrfToken,
  onSubmit
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Estelle",
      password: "password"
      //username: "",
      //password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props._csrf, this.state.username, this.state.password);

  };
  render() {
    if (this.props.isAuthenticated===null) { return <div></div> }
    if (this.props.isAuthenticated) {return <Redirect to="/administration" />}
    return (
    <div className="login">
      <div className="formulaire formulaire-light">
        <h1 className="formulaire-title">LOGIN</h1>
        <form className="clearfix" onSubmit={this.handleSubmit} autoComplete="off">
          <input className="formulaire-input" type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>
          <input className="formulaire-input" type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
          <p>{this.props.errorMessage}</p>
          <span className="formulaire-btn-wrapper border-bottom-center"><input className="formulaire-btn" type="submit" value="Log in"/></span>
        </form>
        <span className="formulaire-help">Forgot password ?</span>
      </div>
    </div>
    )
  };
  componentDidMount() {
    this.props.setCsrfToken(_csrf);
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);