const React = require("react");
export default (props) => (
<div className="articles-vignette articles-light">
  <img className="articles-img" src={props.data}/>
  <span className="articles-index">1<span className="articles-index-point">.</span></span>
  <div className="articles-loader"></div>
</div>
);