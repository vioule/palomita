const React = require("react");
import { connect } from 'react-redux';
import Navbar from './navbar';
import Searchbar from '../topbar/searchbar';
import Item from './item';
import Popup from '../popup';
import { sort, getComments as populate } from '../../actions/commentaires';

const mapStateToProps = state => { return {...state.comments, search: state.search} };

const mapDispatchToProps = {
  populate,
  sort
};

class Commentaires extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    //FILTER//
    let data = Object.assign({},this.props.data);
    data.content = data.content.filter(commentaire=>{
      switch(this.props.search.type) {
        case "title":
          return commentaire.parent.title.toLowerCase().includes(this.props.search.content.toLowerCase())
        case "categorie":
          return -1
        case "author":
          return commentaire.author.name.toLowerCase().includes(this.props.search.content.toLowerCase())
        case "date":
          return new Date(commentaire.date).toLocaleDateString().toLowerCase().includes(this.props.search.content.toLowerCase())
        default:
          return commentaire[this.props.search.type].toLowerCase().includes(this.props.search.content.toLowerCase())
      }
    });

    if (this.props.search.own) {
      data.content = data.content.filter(commentaire=>commentaire.author.role=="admin")
    }
    if (this.props.search.new) {
      data.content = data.content.filter(commentaire=>!commentaire.read)
    }


    return (
    <>
    <Popup/>
    <Searchbar title="commentaire"/>
    <div className="content-page">
      <Navbar articles={this.props.data.content.length} newArticles={this.props.data.content.filter(x=>!x.read).length}/>
      <div className="scroll">
      <table className="table table-light">
        <thead className="table-head">
          <tr>
            <th className="table-th"><button 
            onClick={()=>this.props.sort(this.props.data, "parent", "string")} 
            className={
              "table-head-btn " +
              (this.props.data.sort=="parent" ? this.props.data.ascending ? "table-head-asort" : "table-head-dsort" : "")}
            >Article</button></th>
            <th><button 
            onClick={()=>this.props.sort(this.props.data, "author", "author")} 
            className={this.props.data.sort=="author" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Auteur</button></th>
            <th className="table-th-date"><button 
            onClick={()=>this.props.sort(this.props.data, "date", "date")} 
            className={this.props.data.sort=="date" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Date</button></th>
            <th className="table-th-reponse"><button 
            onClick={()=>this.props.sort(this.props.data, "reponse", "array")} 
            className={this.props.data.sort=="reponse" ? 
            this.props.data.ascending ? "table-head-btn table-head-asort" : "table-head-btn table-head-dsort" : "table-head-btn"}
            >Réponses</button></th>
            <th className="table-th-icon"></th>
            <th className="table-th-icon"></th>
            <th className="table-th-icon"></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.content.map(article=><Item article={{...article}} key={article._id}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Commentaires);