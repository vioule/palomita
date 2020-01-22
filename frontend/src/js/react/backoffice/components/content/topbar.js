const React = require("react");
import { connect } from 'react-redux'

class Topbar extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="topbar topbar-light">
      TOPBAR
    </div>
    )
  };
};

export default connect(null, null)(Topbar);