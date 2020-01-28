const React = require("react");

class Comment extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className={"comment " + (this.props.type === "reponse" ? "comment-reponse" : "")}>
        <span className="comment-author">{this.props.author.name}</span>
        <span className="comment-date">{new Date(this.props.date).toLocaleDateString()}</span>
        <span className="comment-content">{this.props.content}</span>
        <div className="comment-btns">
          <button className="comment-btn"><img className="comment-icon comment-icon-reponse" src="/img/backoffice.svg#reponse-blue"/></button>
          <button className="comment-btn"><img className="comment-icon comment-icon-delete" src="/img/backoffice.svg#delete-blue"/></button>
        </div>
      </div>
    )
  };
};

export default Comment;