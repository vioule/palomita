const React = require("react");
import { connect } from 'react-redux';
import Navbar from './navbar';
import { sort, getArticles as populate } from '../../actions/articles';

const mapStateToProps = state => { return {...state.articles} };

const mapDispatchToProps = {
  populate,
  sort
};

class Articles extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="content-page">
      <Navbar />
      <table className="table table-light">
        <thead className="table-head">
          <tr>
            <th><button 
            onClick={()=>this.props.sort(this.props.data, "title", "string")} 
            className={this.props.data.sort=="title" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Article</button></th>
            <th><button 
            onClick={()=>this.props.sort(this.props.data, "date", "date")} 
            className={this.props.data.sort=="date" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Date</button></th>
            <th><button 
            onClick={()=>this.props.sort(this.props.data, "categorie", "string")} 
            className={this.props.data.sort=="categorie" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Catégorie</button></th>
            <th><button 
            onClick={()=>this.props.sort(this.props.data, "comments", "array")} 
            className={this.props.data.sort=="comments" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Commentaires</button></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {this.props.data.content.map(article=>
          <tr key={article._id}>
            <td className="table-td">{article.title}</td>
            <td className="table-td">{article.date}</td>
            <td className="table-td">{article.categorie}</td>
            <td className="table-td">{article.comments.length}</td>
            <td className="table-td"><img className="table-icon table-icon-edit" src="/img/backoffice.svg#edit-blue"/></td>
            <td className="table-td"><img className="table-icon table-icon-delete" src="/img/backoffice.svg#delete-blue"/></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    )
  };
  componentDidMount() {
   this.props.populate();
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);