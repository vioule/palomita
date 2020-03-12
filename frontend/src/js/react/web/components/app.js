const React = require("react");
import { connect } from 'react-redux';
import { setArticlesContent } from '../actions/articles';
import { setArticle } from '../actions/article';
import Loader from '../components/home/loader';
import { withRouter } from "react-router";

export class App extends React.Component {
  render(){
    if(this.props.location.pathname.startsWith('/article/')) {
      if (this.props.content.length>0 && this.props.article._id === this.props.location.pathname.substring(9)) {
        return(<div className="entrance">
          {this.props.children}
        </div>)
      } else {
        return(<Loader/>)
      }
    } else {
      if (this.props.content.length>0) {
        return(<div className="entrance">
          {this.props.children}
        </div>)
      } else {
        return(<Loader/>)
      }
    }
  };
  componentDidMount(){
    this.props.setArticlesContent();
    if (this.props.location.pathname.startsWith('/article/')) {
      this.props.setArticle(this.props.location.pathname.substring(9)) //id
    }
  };
};

export default withRouter(connect(
  state=>{return{content: state.articles.content, article: state.article}}, 
  { setArticlesContent, setArticle }
)(App))