const React = require("react");
import { connect } from 'react-redux';
import { setSearchContent, setSearchType } from '../../actions/search';

const mapStateToProps = (state) => { return {...state.search}};
const mapDispatchToProps = { setSearchContent, setSearchType };

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(e) {
    this.props.setSearchContent(e.target.value)
  };
  render() {
    return (
    <>
    <div className="topbar topbar-light">
      <img className="topbar-icon-search" src="/img/backoffice.svg#loupe-black"/>
      <form id="topbar-search" className="topbar-form"/>
      <input 
      form="topbar-search" 
      className="topbar-search" 
      type="text" 
      placeholder={"Rechercher un "+this.props.title}
      value={this.props.content} 
      onChange={this.handleChange}
      />
    </div>
    <ul className={"topbar-search-types " + (this.props.content ? "topbar-search-types-show" : "")}>
      <li onClick={()=>this.props.setSearchType("title")} className={"topbar-search-type " + (this.props.type=="title" ? "topbar-search-type-selected" : "")}>Article</li>
      <li onClick={()=>this.props.setSearchType("author")} className={"topbar-search-type " + (this.props.type=="author" ? "topbar-search-type-selected" : "")}>Auteur</li>
      <li onClick={()=>this.props.setSearchType("content")} className={"topbar-search-type " + (this.props.type=="content" ? "topbar-search-type-selected" : "")}>Contenu</li>
      <li onClick={()=>this.props.setSearchType("date")} className={"topbar-search-type " + (this.props.type=="date" ? "topbar-search-type-selected" : "")}>Date</li>
    </ul>
    </>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);