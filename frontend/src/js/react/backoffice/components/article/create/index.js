const React = require("react");
import { connect } from 'react-redux';
import {TopbarArticleConnected} from '../../topbar';
import TextEditBar from '../../topbar/texteditbar';
import { setArticleTitle, setArticleCategorie, sortArticleContent, setArticle } from '../../../actions/article';
import { createArticle } from '../../../actions/articles';
import ButtonAddParagraph from './buttonAddParagraph';
import ButtonAddImage from './buttonAddImage';
import PopulateArticle from './populateArticle';

const mapStateToProps = state => { return {article: state.article, _csrf: state._csrf}};
const mapDispatchToProps = { setArticleTitle, setArticleCategorie, sortArticleContent, createArticle, setArticle };

export class Create extends React.Component {
  handleSortEnd({oldIndex, newIndex}) {
    this.props.sortArticleContent(this.props.article.content,{oldIndex, newIndex})
  };
  render() {
    if (window.location.pathname.includes("create")) {
      this.info = "publier"
    }else if (window.location.pathname.includes("edit")) {
      this.info = "modifier"
    }
    return (
    <>
    <TopbarArticleConnected {...this.props}/>
    <TextEditBar/>
    <div className="content-page article-light">
    {
    this.props.article.infos.validate && 
    <div className="publish-text">
      Vous êtes sur le point de {this.info} un article sur le blog.
    </div> 
    }
      <form id="article-create" onSubmit={this.handleSubmit} autoComplete="off"/>
      <select form="article-create" className="article-infos article-categorie" name="article-categorie" value={this.props.article.infos.categorie} onChange={(e)=>this.props.setArticleCategorie(e.target.value)} disabled={this.props.article.infos.validate}>
        <option value="">Categorie</option>
        <option value="cuisine">Cuisine</option>
        <option value="voyage">Voyage</option>
        <option value="style">Style</option>
        <option value="deco">Deco</option>
      </select>
      <input form="article-create" className="article-infos article-title" type="text" placeholder="title" value={this.props.article.infos.title} onChange={(e)=>this.props.setArticleTitle(e.target.value)} readOnly={this.props.article.infos.validate}/>
      {!this.props.article.infos.validate && <><ButtonAddParagraph/> <ButtonAddImage/></>}
      <PopulateArticle items={this.props.article.content} validate={this.props.article.infos.validate} onSortEnd={this.handleSortEnd.bind(this)} pressDelay={200}/>

      {this.props.article.infos.validate && 
      <div className="publish-text">
        <span>
        Etes-vous sûr de vouloir continuer ?
        <button className="topbar-btn topbar-btn-publish" onClick={this.props.onClick}>
          <img className="topbar-icon-big topbar-icon-rightarrow" src="/img/backoffice.svg#rightarrow-blue"/>
        </button>
        </span>
      </div>}
    </div>
    </>
    )
  };
  componentDidMount(){
    this.props.componentDidMount();
  }
};


const CreateConnected = (props) => <Create onClick={
  async() => {
    await props.createArticle({
      title: props.article.infos.title,
      categorie: props.article.infos.categorie,
      date: new Date(),
      content: props.article.content,
      comments: []
    },props._csrf);
    props.history.push('/administration/articles');
  }} 
  componentDidMount = {()=>props.setArticle({
    title: "", 
    categorie: "", 
    content: [], 
    _id: ""
  })}
  {...props}
/>

export default connect(mapStateToProps, mapDispatchToProps)(CreateConnected);