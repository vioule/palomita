const React = require("react");
import { Link } from 'react-router-dom';

export default (props) => {
  return <div className="article-nav clearfix">
    {props.next && <Link to={props.next} className="item border-bottom-right">Article suivant</Link>}
    {props.prec && <Link to={props.prec} className="item right border-bottom-left">Article précédent</Link>}
  </div>
}
