const React = require("react");
import { connect } from 'react-redux';
import {Create as Article} from './create';
import { setArticleTitle, setArticleCategorie, sortArticleContent } from '../../actions/article';
import { updateArticle } from '../../actions/articles';
import { setArticle } from '../../actions/article';

const mapStateToProps = state => { return {article: state.article, _csrf: state._csrf}};
const mapDispatchToProps = { setArticleTitle, setArticleCategorie, sortArticleContent, updateArticle, setArticle };

const Update = (props)=><Article onClick={
  async() => {
    await props.updateArticle({
      id: props.article.infos._id,
      title: props.article.infos.title,
      categorie: props.article.infos.categorie,
      content: props.article.content
    }, props._csrf);
    props.history.push('/administration/articles');
  }}
componentDidMount = { ()=>props.setArticle({
  title: props.location.state.title, 
  categorie: props.location.state.categorie, 
  content: props.location.state.content, 
  _id: props.location.state._id 
})}
{...props}
/>

export default connect(mapStateToProps, mapDispatchToProps)(Update);