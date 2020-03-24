const React = require("react");
import { connect } from 'react-redux';
import {Create as Article} from './create';
import { setArticleTitle, setArticleCategorie, sortArticleContent, uploadArticleImages } from '../../actions/article';
import { updateArticle, updateRough } from '../../actions/articles';
import { setArticle } from '../../actions/article';

const mapStateToProps = state => { return {article: state.article, _csrf: state._csrf, isFetching: state.articles.isFetching, didInvalidate: state.articles.didInvalidate}};
const mapDispatchToProps = { setArticleTitle, setArticleCategorie, sortArticleContent, updateArticle, setArticle, updateRough, uploadArticleImages };

const Update = (props)=><Article onClick={
  async() => {
    let uploadImgs = props.article.content.filter(el=>el.type=='image' && el.data.startsWith('blob:'))
    if (uploadImgs.length>0) {
      await props.uploadArticleImages(uploadImgs, props._csrf, props.article.infos._id);
    }
    await props.updateArticle({
      id: props.article.infos._id,
      title: props.article.infos.title,
      categorie: props.article.infos.categorie,
      vignette: props.article.infos.vignette,
      content: props.article.content,
      published: true
    }, props._csrf);
    props.history.push('/administration/articles');
  }}
componentDidMount = { ()=>props.setArticle({
  title: props.location.state.title, 
  categorie: props.location.state.categorie, 
  vignette: props.location.state.vignette, 
  content: props.location.state.content, 
  _id: props.location.state._id,
  published: props.location.state.published
})}
{...props}
/>

export default connect(mapStateToProps, mapDispatchToProps)(Update);