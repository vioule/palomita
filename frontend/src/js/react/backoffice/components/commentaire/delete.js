const React = require("react");
import Comment from './comment';
import Topbar from '../topbar';

class Delete extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    const data = this.props.location.state;
    return (
    <>
    <Topbar title="commentaire" {...this.props} rightBtn={false}/>
    <div className="content-page comment-light">
      <div className="publish-text">Vous êtes sur le point de supprimer un commentaire sur le blog.</div>
      <div className="comment-title comment-categorie">{data.parent.categorie}</div>
      <div className="comment-title">{data.parent.title}</div>
      <Comment {...data} showBtns={false}/>
      <div className="publish-text"><span>
        Etes-vous sûr de vouloir continuer ?
        <button className="topbar-btn topbar-btn-publish" onClick={()=>"toto"}><img className="topbar-icon-big topbar-icon-rightarrow" src="/img/backoffice.svg#rightarrow-blue"/></button>
        </span></div>
    </div>
    </>
    )
  };
};

export default Delete;