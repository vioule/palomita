const React = require("react");
import { connect } from 'react-redux';
import Carousel from './carousel/';
import Content from './content/';
export const Home = (props) => (
  <div className="home">
    {props.articles.length>0 && <Carousel articles={props.articles} />}
    <Content content={props.filter} categorie={props.categorie}/>
  </div>
);

export default connect(
  state=>{return{
    articles: state.articles.content,
    filter: state.articles.filter,
    categorie: state.filter.categorie
  }}, 
  null
)(Home)