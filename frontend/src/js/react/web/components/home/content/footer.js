const React = require("react");
import { connect } from 'react-redux';
import { addArticlesShow } from '../../../actions/articles';

export default connect(null, {addArticlesShow})((props) => (
<div className="header center">
  <button className="button border-bottom-center" onClick={props.addArticlesShow}>AFFICHER PLUS</button>
</div>
));