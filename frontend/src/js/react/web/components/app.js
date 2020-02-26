const React = require("react");
import { connect } from 'react-redux';
import { setArticlesContent } from '../actions/articles';

export class App extends React.Component {
  render(){
    return(this.props.children)
  };
  componentDidMount(){
    this.props.setArticlesContent();
  };
};

export default connect(
  null, 
  { setArticlesContent }
)(App)