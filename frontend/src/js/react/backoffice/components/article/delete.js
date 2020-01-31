const React = require("react");
import Topbar from '../topbar';

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
      <div className="publish-text">Vous êtes sur le point de supprimer un article sur le blog.</div>
      <div className="comment-title comment-categorie">{data.categorie}</div>
      <div className="comment-title">{data.title}</div>
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