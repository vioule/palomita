const React = require("react");
import {Article} from '../article';
export default (props) => (
  <div className="carousel marge">
    <span className="carousel-categorie">{props.articles[0].categorie}</span>
    <div>
      <Article.Vignette data={props.articles[0].content.find(el=>el.id==props.articles[0].vignette).data}/>
      <Article.Text 
      title={props.articles[0].title}
      paragraph={props.articles[0].content.find(el=>el.type=="paragraph").data}
      date={new Date(props.articles[0].date).toLocaleDateString().replace(/\//g,".")}
      />
    </div>
  </div>
);

// export default connect(
//   state=>{return{articles: state.articles}}, 
//   null
// )(Carousel)