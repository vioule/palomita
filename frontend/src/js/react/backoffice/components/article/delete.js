const React = require("react");
import Topbar from '../topbar';
import { connect } from 'react-redux';
import { deleteArticle } from '../../actions/articles';

const mapStateToProps = state => {return {_csrf: state._csrf, isFetching: state.articles.isFetching, didInvalidate: state.articles.didInvalidate}};
const mapDispatchToProps = {deleteArticle};

class Delete extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    const data = this.props.location.state;
    return (
    <>
    <Topbar title="article" {...this.props} rightBtn={false}/>
    <div className="content-page comment-light">
    {this.props.isFetching ? <div className="article-fetching">Les informations sont en cours de traitement.<br/>Cela peut prendre quelques instants.<br/>Merci de patienter.</div> : (
      <>
      <div className="publish-text">Vous êtes sur le point de supprimer un article {data.comments.length>0 ? "et ses "+data.comments.length+" commentaires" : ""} sur le blog.</div>
      <div className="comment-title comment-categorie">{data.categorie}</div>
      <div className="comment-title">{data.title}</div>
      <div className="publish-text"><span>
        Etes-vous sûr de vouloir continuer ?
        <button className="topbar-btn topbar-btn-publish"  
        onClick={async()=>{
          await this.props.deleteArticle(data._id, data.comments, this.props._csrf);
          this.props.history.push('/administration/articles');
          }}>
          <img className="topbar-icon-big topbar-icon-rightarrow" src="/img/backoffice.svg#rightarrow-blue"/>
        </button>
        </span></div>
      </>
    )}
    </div>
    </>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Delete);