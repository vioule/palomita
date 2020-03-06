const React = require("react");
import { connect } from 'react-redux';
import Carousel from './carousel/';
import Content from './content/';
import { setFilterCategorie } from '../../actions/filter';
export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {this.props.articles.length>0 && <Carousel articles={this.props.articles} />}
        <Content content={this.props.filter} categorie={this.props.categorie}/>
      </div>
    )
  };
  componentDidMount() {
    let categorie = this.props.match.path.substring(1);
    categorie === 'home' ?
      this.props.setFilterCategorie('') :
      this.props.setFilterCategorie(categorie)
  };
  componentDidUpdate(prevProps) {
    if (prevProps.categorie !== this.props.categorie) {
      if (this.props.categorie !== '') {
        document.getElementById('header').scrollIntoView({behavior: 'instant'})
      } else {
        window.scrollTo(0,0)
    }
    }
  }
};

export default connect(
  state=>{return{
    articles: state.articles.content,
    filter: state.articles.filter,
    categorie: state.filter.categorie
  }}, 
  {setFilterCategorie}
)(Home)