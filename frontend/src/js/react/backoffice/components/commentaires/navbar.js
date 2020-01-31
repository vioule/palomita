const React = require("react");
import { connect } from 'react-redux';
import { setSearchFilters } from '../../actions/search';
import { showAllComments } from '../../actions/commentaires';

const mapStateToProps = state => { return {...state.search, showAll: state.comments.showAll} };

const mapDispatchToProps = {setSearchFilters, showAllComments};

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="navbar navbar-light">
      <ul>
        <li onClick={()=>this.props.setSearchFilters({new: false, own: false})} className={"navbar-item navbar-hover "+ (!this.props.new && ! this.props.own ? "navbar-selected" : "")}>
          <span className="navbar-number">{this.props.articles}</span><span> Commentaires</span>
        </li>
        <li onClick={()=>this.props.setSearchFilters({new: false, own: true})} className={"navbar-item navbar-hover "+ (this.props.own ? "navbar-selected" : "")}>
          <span>Mes commentaires</span>
        </li>
        <li onClick={()=>this.props.setSearchFilters({new: true, own: false})} className={"navbar-item navbar-hover "+ (this.props.new ? "navbar-selected" : "")}>
          <span className="navbar-newcomments"><span className="navbar-number">{this.props.newArticles}</span><span> Nouveaux</span></span>
        </li>
        <li onClick={()=>this.props.showAllComments(!this.props.showAll)} className="navbar-item">
          <span className="navbar-showall">
            {this.props.showAll ? "Cacher " : "Afficher "}tout
            </span>
        </li>
      </ul>
    </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);;