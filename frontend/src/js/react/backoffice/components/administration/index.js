const React = require("react");
import { connect } from 'react-redux';
import Menu from '../menu';
import Content from '../content';
import Popup from '../popup';

class Administration extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <>
      <Popup/>
      <Content {...this.props}/>
      <Menu {...this.props} />
    </>
    )
  };
};

export default connect(null, null)(Administration);