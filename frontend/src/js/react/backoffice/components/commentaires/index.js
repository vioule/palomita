const React = require("react");
import { connect } from 'react-redux';
import Navbar from './navbar';
import Searchbar from '../topbar/searchbar';
import Item from './item';
import { sort, getComments as populate } from '../../actions/commentaires';

const mapStateToProps = state => { return {...state.comments} };

const mapDispatchToProps = {
  populate,
  sort
};

class Commentaires extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
    <>
    <Searchbar />
    <div className="content-page">
      <Navbar articles={this.props.data.content.length}/>
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
          {this.props.data.content.map(article=><Item {...article} key={article._id}/>)}
        </tbody>
      </table>
    </div>
    </>
    )
  };
  componentDidMount() {
   this.props.populate();
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Commentaires);