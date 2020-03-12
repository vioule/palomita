const React = require("react");
import { connect } from 'react-redux';
import { setComments } from '../../actions/comments';
import Title from './title';
import Categorie from './categorie';
import Content from './content';
import Socials from '../social';
import Datetime from '../card/date';
import Comments from '../comments';
import ArticleNav from './nav';

export class Article extends React.Component {
  constructor(props){
    super(props);
    this.index = null;
    this.next = '';
    this.prec = '';
  };
  render(){
    return (
    <div className="article">
      <Categorie categorie={this.props.article.categorie}/>
      <div className="background">
        {/* <Socials/> */}
        <Title title={this.props.article.title}/>
        <div className="content">
          <Content content={this.props.article.content}>
            {/* <Socials share={true}/> */}
          </Content>
          {/* <Comments comments={this.props.comments} length={this.props.article.comments.length}/> */}
          <ArticleNav next={this.next} prec={this.prec}/>
        </div>
      </div>
      <Datetime date={new Date(this.props.article.date).toLocaleDateString().replace(/\//g,".")}/>
    </div>
    )
  };
  componentDidMount(){
    window.scrollTo(0,0);
    // this.props.setComments(this.props.match.params.articleID);
    this.index = this.props.articles.content.findIndex(el=>el._id==this.props.match.params.articleID)
    this.index > 0 ? this.next = this.props.articles.content[this.index-1]._id : this.next = ''
    this.index < this.props.articles.content.length-1 ? this.prec = this.props.articles.content[this.index+1]._id : this.prec = ''
  };
};

export default connect(
  state=>{return{article: state.article, comments: state.comments, articles: state.articles}}, 
  { setComments }
)(Article)