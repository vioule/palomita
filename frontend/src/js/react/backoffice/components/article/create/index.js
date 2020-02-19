const React = require("react");
import { connect } from 'react-redux';
import {TopbarArticleConnected} from '../../topbar';
import TextEditBar from '../../topbar/texteditbar';
import { setArticleTitle, setArticleCategorie, sortArticleContent, setArticle } from '../../../actions/article';
import { createArticle, createRough } from '../../../actions/articles';
import ButtonAddParagraph from './buttonAddParagraph';
import ButtonAddImage from './buttonAddImage';
import PopulateArticle from './populateArticle';
const bson = require('bson');

const mapStateToProps = state => { return {article: state.article, _csrf: state._csrf}};
const mapDispatchToProps = { setArticleTitle, setArticleCategorie, sortArticleContent, createArticle, createRough, setArticle };

export class Create extends React.Component {
  handleSortEnd({oldIndex, newIndex}) {
    this.props.sortArticleContent(this.props.article.content,{oldIndex, newIndex})
  };
  render() {
    if (window.location.pathname.includes("create")) {
      this.info = "publier"
    }else if (window.location.pathname.includes("edit")) {
      this.props.article.infos.published && this.props.article.infos.validate ?
      this.info = "modifier" :
      this.info = "publier"
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
        <option value="Cuisine">Cuisine</option>
        <option value="Voyage">Voyage</option>
        <option value="Style">Style</option>
        <option value="Deco">Deco</option>
      </select>
      <input form="article-create" className="article-infos article-title" type="text" placeholder="title" value={this.props.article.infos.title} onChange={(e)=>this.props.setArticleTitle(e.target.value)} readOnly={this.props.article.infos.validate}/>
      {!this.props.article.infos.validate && <><ButtonAddParagraph/> <ButtonAddImage/></>}
      {
      !this.props.article.infos.published && !this.props.article.infos.validate && window.location.pathname.includes("edit") &&
      <button className="article-btn" onClick={()=>{
        this.props.updateRough({      
          id: this.props.article.infos._id,
          title: this.props.article.infos.title,
          categorie: this.props.article.infos.categorie,
          content: this.props.article.content,
          published: false
        }, this.props._csrf)
      }}>Sauvegarder brouillon</button>
    }
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
  };
  componentWillUnmount(){
    if (!this.props.article.infos.published && ( this.props.article.infos.title && this.props.article.infos.categorie || this.props.article.content.length>0 ) && this.props.componentWillUnmount){
      this.props.componentWillUnmount()
    }
  }
};


const CreateConnected = (props) => <Create onClick={
  async() => {
    await props.createArticle({
      _id: props.article.infos._id,
      title: props.article.infos.title,
      categorie: props.article.infos.categorie,
      date: new Date(),
      content: props.article.content,
      comments: [],
      published: true
    },props._csrf);
    props.history.push('/administration/articles');
  }} 
  componentWillUnmount= {
    async() => {
      await props.createRough({
        _id: props.article.infos._id,
        title: props.article.infos.title,
        categorie: props.article.infos.categorie,
        date: new Date(),
        content: props.article.content,
        comments: [],
        published: false
      },props._csrf);
  }}
  componentDidMount = {()=>props.setArticle({
    title: "", 
    categorie: "", 
    content: [], 
    _id: new bson.ObjectId(),
    published: false
  })}
  {...props}
/>

export default connect(mapStateToProps, mapDispatchToProps)(CreateConnected);