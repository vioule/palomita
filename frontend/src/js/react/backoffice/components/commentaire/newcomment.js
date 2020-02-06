const React = require("react");
import { connect } from 'react-redux';
import { setAnswerContent } from '../../actions/answer';
import autosize from "autosize";

const mapStateToProps = state => { return {...state.login, answer: state.answer} };
const mapDispatchToProps = { setAnswerContent };

class Newcomment extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(e) {
    this.props.setAnswerContent(e.target.value)
  };
  render() {
    return (
      <div className="comment">
        <span className="comment-author">
          {this.props.type=="reponse" ?
          <img className="comment-icon-conversation" src="/img/backoffice.svg#reponse-blue"/> : null}
          {this.props.user.username} <span className="comment-role">({this.props.user.role.name})</span></span>
        <span className="comment-date">{new Date().toLocaleDateString()}</span>
        <form id="comment-content" onSubmit={this.handleSubmit} autoComplete="off" />
        <textarea form="comment-content" ref={c => (this.textarea = c)} className="comment-content" type="text" name="comment" id="comment" placeholder="Entre ton commentaire ici..." value={this.props.answer.content} onChange={this.handleChange} readOnly={this.props.answer.validate} required/>
      </div>
    )
  };
  componentDidMount() {
    autosize(this.textarea);
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Newcomment);