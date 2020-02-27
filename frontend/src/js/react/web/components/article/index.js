const React = require("react");
import { connect } from 'react-redux';
import { setArticle } from '../../actions/article';
import Title from './title';
import Categorie from './categorie';
import Content from './content';
import Socials from '../social';
import Datetime from '../card/date';

export class Article extends React.Component {
  render(){
    return (
    <div className="article">
      <Categorie categorie={this.props.article.categorie}/>
      <div className="background">
        <Socials/>
        <Title title={this.props.article.title}/>
        <Content content={this.props.article.content}>
          <Socials share={true}/>
        </Content>
        {this.props.article.comments.map(com=><p key={com._id}>{com.content}</p>)}
      </div>
      <Datetime date={new Date(this.props.article.date).toLocaleDateString().replace(/\//g,".")}/>
    </div>
    )
  };
  componentDidMount(){
    this.props.setArticle(this.props.match.params.articleID);
  };
};

export default connect(
  state=>{return{article: state.article}}, 
  { setArticle }
)(Article)