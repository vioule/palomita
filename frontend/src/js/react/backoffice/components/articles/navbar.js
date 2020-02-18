const React = require("react");
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchFilters } from '../../actions/search';
const mapDispatchToProps = {setSearchFilters};
const mapStateToProps = state => { return {...state.search}};

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="navbar navbar-light">
      <ul>
        <li onClick={()=>this.props.setSearchFilters({published: true})} className={"navbar-item navbar-hover "+ (this.props.published ? "navbar-selected" : "")}>
          <span className="navbar-number">{this.props.articles}</span><span> Articles</span>
        </li>
        <li onClick={()=>this.props.setSearchFilters({published: false})} className={"navbar-item navbar-hover "+ (!this.props.published ? "navbar-selected" : "")}>
          <span className="navbar-number">{this.props.roughs}</span><span> Brouillons</span>
        </li>
        <li className="navbar-item navbar-hover">
          <Link className="navbar-link" to="article/create">Ajouter un article</Link>
        </li>
      </ul>
    </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);