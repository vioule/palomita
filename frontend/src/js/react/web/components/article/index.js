const React = require("react");
import { connect } from 'react-redux';
import { setArticle } from '../../actions/article';
import { setComments } from '../../actions/comments';
import Title from './title';
import Categorie from './categorie';
import Content from './content';
import Socials from '../social';
import Datetime from '../card/date';
import Comments from '../comments';

export class Article extends React.Component {
  render(){
    return (
    <div className="article">
      <Categorie categorie={this.props.article.categorie}/>
      <div className="background">
        <Socials/>
        <Title title={this.props.article.title}/>
        <div className="content">
          <Content content={this.props.article.content}>
            <Socials share={true}/>
          </Content>
          <Comments comments={this.props.comments} length={this.props.article.comments.length}/>
        </div>
      </div>
      <Datetime date={new Date(this.props.article.date).toLocaleDateString().replace(/\//g,".")}/>
    </div>
    )
  };
  componentDidMount(){
    this.props.setArticle(this.props.match.params.articleID);
    this.props.setComments(this.props.match.params.articleID);
  };
};

export default connect(
  state=>{return{article: state.article, comments: state.comments}}, 
  { setArticle, setComments }
)(Article)