const React = require("react");
export default class Search extends React.Component {
  handleChange() {

  };
  render() {
    return (
      <li className="menu-info-item menu-anim clearfix">
        <form id="search" className="search">
        <img className="icon" src="/img/icons.svg#loupe-black"/>
        <input 
        form="search" 
        className="search-input" 
        type="text" 
        placeholder="Rechercher"
        value={this.props.content} 
        onChange={this.handleChange.bind(this)}
        />
        </form>
      </li>
    )
  }
};