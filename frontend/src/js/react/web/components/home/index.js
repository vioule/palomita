const React = require("react");
import { connect } from 'react-redux';
import Carousel from './carousel/';
import Content from './content/';
import { setFilterCategorie } from '../../actions/filter';
export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {this.props.articles.length>0 && this.props.match.path == '/home' && <Carousel articles={this.props.articles} />}
        <Content content={this.props.filter} show={this.props.show} categorie={this.props.categorie}/>
      </div>
    )
  };
  componentDidMount() {
    window.scrollTo(0,0);
    let categorie = this.props.match.path.substring(1);
    categorie === 'home' ?
      this.props.setFilterCategorie('') :
      this.props.setFilterCategorie(categorie)
  };
};

export default connect(
  state=>{return{
    show: state.articles.show,
    articles: state.articles.content,
    filter: state.articles.filter,
    categorie: state.filter.categorie
  }}, 
  {setFilterCategorie}
)(Home)