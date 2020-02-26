const React = require("react");
import {ArticleLeft, ArticleRight} from '../article';
import Header from './header';

export default (props) => (
  <div className="marge">
    <Header count={props.content.length} categorie={props.categorie}/>
    <div>
    {props.content.map((article, index)=>{
      return index%2 == 0 ? 
      <ArticleLeft 
      key={article._id}
      title={article.title}
      paragraph={article.content.find(el=>el.type=="paragraph").data}
      date={new Date(article.date).toLocaleDateString().replace(/\//g,".")}
      img={article.content.find(el=>el.id==article.vignette).data}
      categorie={article.categorie}
      id={article._id}
      /> : 
      <ArticleRight 
      key={article._id}
      title={article.title}
      paragraph={article.content.find(el=>el.type=="paragraph").data}
      date={new Date(article.date).toLocaleDateString().replace(/\//g,".")}
      img={article.content.find(el=>el.id==article.vignette).data}
      categorie={article.categorie}
      id={article._id}
      /> 

    })}
    </div>
    
  </div>
);