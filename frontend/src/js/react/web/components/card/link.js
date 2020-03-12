const React = require("react");
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setArticle } from '../../actions/article';
export default connect(null, {setArticle})((props) => (
<div className="link">
  <Link to={"/article/"+props.id} onClick={()=>props.setArticle(props.id)}>Lire plus</Link>
</div>
));