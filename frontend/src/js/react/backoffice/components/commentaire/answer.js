const React = require("react");
import { connect } from 'react-redux';
import Comment from './comment';
import Topbar from '../topbar';
import Newcomment from './newcomment';
import Popup from '../popup';
import { initAnswer } from '../../actions/answer';
import { createAnswer } from '../../actions/commentaires';

const mapStateToProps = state => { return {...state.answer, user: state.login.user, _csrf: state._csrf}};
const mapDispatchToProps = { initAnswer, createAnswer };

class Answer extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    const data = this.props.location.state
    return (
    <>
    <Popup/>
    <Topbar title="commentaire" {...this.props} rightBtn={true}/>
    <div className="content-page comment-light">
      {this.props.validate ? <div className="publish-text">Vous êtes sur le point de publier un commentaire sur le blog.</div> : null}
      <div className="comment-title comment-categorie">{data.parent.categorie}</div>
      <div className="comment-title">{data.parent.title}</div>
      {!this.props.validate ? <Comment {...data} showBtns={false}/> : null }
      <Newcomment />
      {this.props.validate ? <div className="publish-text"><span>
        Etes-vous sûr de vouloir continuer ?
        <button className="topbar-btn topbar-btn-publish" onClick={async()=>{
          await this.props.createAnswer({
            author: this.props.data.author,
            date: new Date(),
            content: this.props.data.content,
            parent: this.props.data.parent,
            reponse: [],
            type: "reponse",
            read: true
          }, data._id, data.type, this.props._csrf);
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
      parent: data.parent._id
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);