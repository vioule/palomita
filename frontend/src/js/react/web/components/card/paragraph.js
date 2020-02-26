const React = require("react");
export default (props) => (
<p className="paragraph" dangerouslySetInnerHTML={{__html: props.paragraph}}></p>
);