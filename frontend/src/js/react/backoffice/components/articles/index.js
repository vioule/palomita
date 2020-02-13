const React = require("react");
import { connect } from 'react-redux';
import Navbar from './navbar';
import Searchbar from '../topbar/searchbar';
import Item from './item';
import { sort, getArticles as populate } from '../../actions/articles';

const mapStateToProps = state => { return {...state.articles, search: state.search} };

const mapDispatchToProps = {
  populate,
  sort
};

class Articles extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    //FILTER//
    let data = Object.assign({},this.props.data);
    data.content = data.content.filter(article=>{
      switch(this.props.search.type) {
        case "author":
          return -1
        case "date":
          return new Date(article.date).toLocaleDateString().toLowerCase().includes(this.props.search.content.toLowerCase())
        case "content":
          if (this.props.search.content) {
            let data = article.content.filter(content=>{
              if (content.data) {
              return content.data.toLowerCase().includes(this.props.search.content.toLowerCase())
              } else { 
                return false
            }})
            if(data.length>0){
              return data
            } else {
              return false
            }
          } else {
            return -1
          }
        default:
          return article[this.props.search.type].toLowerCase().includes(this.props.search.content.toLowerCase())
      }
    });

    return (
    <>
    <Searchbar title="article"/>
    <div className="content-page">
      <Navbar articles={this.props.data.content.length}/>
      <div className="scroll">
      <table className="table table-light">
        <thead className="table-head">
          <tr>
            <th className="table-th"><button 
            onClick={()=>this.props.sort(this.props.data, "title", "string")} 
            className={this.props.data.sort=="title" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Article</button></th>
            <th><button 
            onClick={()=>this.props.sort(this.props.data, "categorie", "string")} 
            className={this.props.data.sort=="categorie" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Catégorie</button></th>
            <th className="table-th-date"><button 
            onClick={()=>this.props.sort(this.props.data, "date", "date")} 
            className={this.props.data.sort=="date" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Date</button></th>
            <th className="table-th-reponse"><button 
            onClick={()=>this.props.sort(this.props.data, "comments", "array")} 
            className={this.props.data.sort=="comments" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Commentaires</button></th>
            <th className="table-th-icon"></th>
            <th className="table-th-icon"></th>
            <th className="table-th-icon"></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.content.map(article=><Item {...article} key={article._id} />)}
        </tbody>
      </table>
      </div>
    </div>
    </>
    )
  };
  componentDidMount() {
   this.props.populate();
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);