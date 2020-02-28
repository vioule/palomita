const React = require("react");
export default (props) => (
<time dateTime={props.date} className="comment-date">{props.date}</time>
);