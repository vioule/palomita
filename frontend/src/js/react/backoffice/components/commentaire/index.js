const React = require("react");
import { connect } from 'react-redux';
import { getConversation as populate } from '../../actions/commentaire';
import Comment from './comment';

const mapStateToProps = state => { return {...state.comment} };
const mapDispatchToProps = {populate};

class Commentaire extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
    <div className="content-page comment-light">
      <div className="comment-title comment-categorie">{this.props.data.parent.categorie}</div>
      <div className="comment-title">{this.props.data.parent.title}</div>
      <Comment {...this.props.data}/>
      {this.props.data.reponse.map(x=><Comment key={x._id} {...x}/>)}
    </div>
    )
  };
  componentDidMount() {
    this.props.populate(this.props.match.params.commentID);
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Commentaire);