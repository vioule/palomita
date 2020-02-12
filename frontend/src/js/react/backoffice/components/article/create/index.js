const React = require("react");
import { connect } from 'react-redux';
import Topbar from '../../topbar';
import TextEditBar from '../../topbar/texteditbar';
import { setArticleTitle, setArticleCategorie, sortArticleContent } from '../../../actions/article';
import ButtonAddParagraph from './buttonAddParagraph';
import ButtonAddImage from './buttonAddImage';
import PopulateArticle from './populateArticle';

const mapStateToProps = state => { return {article: state.article, _csrf: state._csrf}};
const mapDispatchToProps = { setArticleTitle, setArticleCategorie, sortArticleContent };

class Create extends React.Component {
  handleSortEnd({oldIndex, newIndex}) {
    this.props.sortArticleContent(this.props.article.content,{oldIndex, newIndex})
  };
  render() {
    return (
    <>
    <Topbar title="article" {...this.props} rightBtn={true}/>
    <TextEditBar/>
    <div className="content-page article-light">
      <form id="article-create" onSubmit={this.handleSubmit} autoComplete="off"/>
      <select form="article-create" className="article-infos article-categorie" name="article-categorie" onChange={(e)=>this.props.setArticleCategorie(e.target.value)}>
        <option value="">Categorie</option>
        <option value="cuisine">Cuisine</option>
        <option value="voyage">Voyage</option>
        <option value="style">Style</option>
        <option value="deco">Déco</option>
      </select>
      <input form="article-create" className="article-infos article-title" type="text" placeholder="title" value={this.props.article.infos.title} onChange={(e)=>this.props.setArticleTitle(e.target.value)}/>
      <ButtonAddParagraph/>
      <ButtonAddImage/>

      <PopulateArticle items={this.props.article.content} onSortEnd={this.handleSortEnd.bind(this)} pressDelay={200}/>

    </div>
    </>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);