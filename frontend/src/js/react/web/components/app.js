const React = require("react");
import { connect } from 'react-redux';
import { setArticlesContent } from '../actions/articles';

export class App extends React.Component {
  render(){
    if (this.props.content.length>0) {
      return(this.props.children)
    } else {
      return(<div>loading</div>)
    }
  };
  componentDidMount(){
    this.props.setArticlesContent();
  };
};

export default connect(
  state=>{return{content: state.articles.content}}, 
  { setArticlesContent }
)(App)