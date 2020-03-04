const React = require("react");
import {Article} from '../article';
export default (props) => (
  <div className="carousel marge">
    <span className="carousel-categorie">{props.articles[0].categorie}</span>
    <Article 
    title={props.articles[0].title}
    paragraph={props.articles[0].content.find(el=>el.type=="paragraph").data}
    date={new Date(props.articles[0].date).toLocaleDateString().replace(/\//g,".")}
    img={props.articles[0].content.find(el=>el.id==props.articles[0].vignette).data}
    categorie={props.articles[0].categorie}
    id={props.articles[0]._id}
    />
  </div>
);