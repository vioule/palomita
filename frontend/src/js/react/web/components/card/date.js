const React = require("react");
export default (props) => (
<time dateTime={props.date} className="date">
  <span>{props.date}</span>
</time>
);