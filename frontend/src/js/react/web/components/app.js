const React = require("react");
import { connect } from 'react-redux';
import { setArticlesContent } from '../actions/articles';
import Loader from '../components/home/loader';

export class App extends React.Component {
  render(){
    if (this.props.content.length>0) {
      return(<div className="entrance">
        {this.props.children}
      </div>)
    } else {
      return(<Loader/>)
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