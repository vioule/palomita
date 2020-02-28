const React = require("react");
import Comment from './comment';
import Answer from './comment/answer';

export default (props) => (
<div className="comments">
  <span className="text"><span className="number">{props.length}</span> COMMENTAIRE{props.length>1?"S":""}</span>
  <Answer/>
  {props.comments.map(comment=><Comment key={comment._id} comment={comment} />)}
</div>
);