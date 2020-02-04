const React = require("react");
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className={
        "comment " + 
        (window.location.pathname.includes("commentaire/"+this.props._id) ? "comment-selected " : "") +
        (this.props.type === "reponse" && this.props.showBtns ? "comment-reponse" : "")
        }>
        <span className="comment-author">
          {this.props.type === "reponse" ? <img className="comment-icon-conversation" src="/img/backoffice.svg#reponse-blue"/> : null}
          {this.props.author.name} {this.props.author.role == "admin" ?  <span className="comment-role">({this.props.author.role})</span> : null}
          </span>
        <span className="comment-date">{new Date(this.props.date).toLocaleDateString()}</span>
        <span className="comment-content">{this.props.content}</span>
        { this.props.showBtns ?
        <div className="comment-btns">
          <Link className="comment-btn" to={{pathname:this.props._id+"/answer", state: this.props}}>
            <img className="comment-icon comment-icon-reponse" src="/img/backoffice.svg#reponse-blue"/>
          </Link>
          <Link className="comment-btn" to={{pathname:this.props._id+"/delete", state: this.props}}>
            <img className="comment-icon comment-icon-delete" src="/img/backoffice.svg#delete-blue"/>
            </Link>
        </div> : null
        }
      </div>
    )
  };
};

export default Comment;