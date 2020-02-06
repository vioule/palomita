const React = require("react");
import { connect } from 'react-redux';
import Topbar from '../topbar';
import Newcomment from './newcomment';
import { initAnswer } from '../../actions/answer';
import { createComment } from '../../actions/commentaires';

const mapStateToProps = state => { return {...state.answer, user: state.login.user, _csrf: state._csrf}};
const mapDispatchToProps = { initAnswer, createComment };

class Comment extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    const data = this.props.location.state
    return (
    <>
    <Topbar title="commentaire" {...this.props} rightBtn={true}/>
    <div className="content-page comment-light">
      {this.props.validate ? <div className="publish-text">Vous êtes sur le point de publier un commentaire sur le blog.</div> : null}
      <div className="comment-title comment-categorie">{data.categorie}</div>
      <div className="comment-title">{data.title}</div>
      <Newcomment type="comment" />
      {this.props.validate ? <div className="publish-text"><span>
        Etes-vous sûr de vouloir continuer ?
        <button className="topbar-btn topbar-btn-publish" onClick={async()=>{
          await this.props.createComment({
            author: this.props.data.author,
            date: new Date(),
            content: this.props.data.content,
            parent: this.props.data.parent,
            reponse: [],
            type: "comment",
            read: true
          }, this.props._csrf);
          this.props.history.push('/administration/commentaires');
        }}>
          <img className="topbar-icon-big topbar-icon-rightarrow" src="/img/backoffice.svg#rightarrow-blue"/>
        </button>
        </span></div> : null}
    </div>
    </>
    )
  };
  componentDidMount() {
    const data = this.props.location.state
    this.props.initAnswer({
      author: {
        name: this.props.user.username,
        role: this.props.user.role.name
      },
      date: new Date(),
      parent: data._id
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);