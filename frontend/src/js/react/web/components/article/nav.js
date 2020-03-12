const React = require("react");
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setArticle } from '../../actions/article';

export default connect(null, {setArticle})((props) => {
  return <div className="article-nav clearfix">
    {props.next && <Link to={props.next} className="item border-bottom-right" onClick={()=>props.setArticle(props.next)}>Article suivant</Link>}
    {props.prec && <Link to={props.prec} className="item right border-bottom-left" onClick={()=>props.setArticle(props.prec)}>Article précédent</Link>}
  </div>
});
