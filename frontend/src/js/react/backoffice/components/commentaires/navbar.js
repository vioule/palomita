const React = require("react");
import { connect } from 'react-redux';
import { setSearchFilters } from '../../actions/search';
import { showAllComments, readComments } from '../../actions/commentaires';

const mapStateToProps = state => { return {...state.search, showAll: state.comments.showAll, _csrf: state._csrf} };

const mapDispatchToProps = {setSearchFilters, showAllComments, readComments};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowAll = this.handleShowAll.bind(this);
  };
  handleShowAll() {
    this.props.showAllComments(!this.props.showAll);
    //LIRE LES COMMENTAIRES//
    let newComments = this.props.comments.filter(article=>article.read==false).map(article=>article._id);
    if (newComments.length>0 && !this.props.showAll) {
      this.props.readComments(newComments, this.props._csrf)
    }
  }
  render() {
    return (
    <div className="navbar navbar-light">
      <ul>
        <li onClick={()=>this.props.setSearchFilters({new: false, own: false})} className={"navbar-item navbar-hover "+ (!this.props.new && ! this.props.own ? "navbar-selected" : "")}>
          <span className="navbar-number">{this.props.comments.length}</span><span> Commentaires</span>
        </li>
        <li onClick={()=>this.props.setSearchFilters({new: false, own: true})} className={"navbar-item navbar-hover "+ (this.props.own ? "navbar-selected" : "")}>
          <span>Mes commentaires</span>
        </li>
        <li onClick={()=>this.props.setSearchFilters({new: true, own: false})} className={"navbar-item navbar-hover "+ (this.props.new ? "navbar-selected" : "")}>
          <span className="navbar-newcomments"><span className="navbar-number">{this.props.newComments}</span><span> Nouveaux</span></span>
        </li>
        <li onClick={this.handleShowAll} className="navbar-item">
          <span className="navbar-showall">
            {this.props.showAll ? "Cacher " : "Afficher "}tout
            </span>
        </li>
      </ul>
    </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);