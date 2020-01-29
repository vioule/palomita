const React = require("react");
import { connect } from 'react-redux'

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="topbar topbar-light">
      <img className="menu-item-icon" src="/img/backoffice.svg#loupe-black"/>
      SEARCHBAR
    </div>
    )
  };
};

export default connect(null, null)(Searchbar);