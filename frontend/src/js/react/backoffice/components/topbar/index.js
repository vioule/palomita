const React = require("react");
import { connect } from 'react-redux'
import { setAnswerValidate } from '../../actions/answer';
import { setArticleValidate } from '../../actions/article';

const mapStateToProps = (state) => { return {
  validate: state.answer.validate,
  content: state.answer.data.content
}}

class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.info = "";
  };
  render() {
    if (this.props.validate) {
      this.info = "Publier "
    }else if(window.location.pathname.includes("delete")) {
      this.info = "Supprimer "
    }else if (window.location.pathname.includes("edit")) {
      this.info = "Modifier "
    }else {
      if (this.props.title=="commentaire") {
        this.info = "Nouveau "
      }else {
        this.info = "Nouvel "
      }
    }
    return (
    <div className="topbar topbar-light">
      <button className="topbar-btn" onClick={this.props.validate ? 
        ()=>this.props.onClick(false) :
        ()=>this.props.history.goBack()}>
        <img className="topbar-icon topbar-icon-leftarrow" src="/img/backoffice.svg#leftarrow-blue"/>
      </button>
      {this.info + this.props.title}
      {this.props.rightBtn && !this.props.validate && this.props.content ? 
      <button className="topbar-btn topbar-btn-right" onClick={()=>this.props.onClick(true)}><img className="topbar-icon topbar-icon-rightarrow" src="/img/backoffice.svg#rightarrow-blue"/></button> : null}
    </div>
    )
  };
};

export default connect(mapStateToProps, {onClick: setAnswerValidate})(Topbar);

const TopbarArticle = (props)=><Topbar title="article" rightBtn={true} {...props}/>

export const TopbarArticleConnected = connect(
  (state) => { return {
    validate: state.article.infos.validate,
    content: state.article.infos.title && state.article.infos.categorie
  }},
  {onClick: setArticleValidate}
)(TopbarArticle)