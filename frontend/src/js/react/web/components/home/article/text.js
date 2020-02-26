const React = require("react");
import { Link } from 'react-router-dom';
export default (props) => (
<div className="articles-text articles-light">
  <span className="articles-last">derniers articles</span>
  <h2 className="articles-title">{props.title}</h2>
  <p className="articles-paragraph" dangerouslySetInnerHTML={{__html: props.paragraph}}></p>
  <div className="articles-link">
    <Link to="/">Lire plus</Link>
  </div>
  <span className="articles-date">{props.date}</span>
</div>
)

export const Dark = (props) => (
  <div className="articles-text articles-dark">
    <h2 className="articles-title">{props.title}</h2>
    <p className="articles-paragraph" dangerouslySetInnerHTML={{__html: props.paragraph}}></p>
    <div className="articles-link">
      <Link to="/">Lire plus</Link>
    </div>
    <span className="articles-date">{props.date}</span>
  </div>
  )