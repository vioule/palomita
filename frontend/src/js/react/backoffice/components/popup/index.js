const React = require("react");
import { connect } from 'react-redux';
import { closePopup } from '../../actions/popup';

const mapStateToProps = (state) => { return {...state.popup}};
const mapDispatchToProps = {closePopup};

class Popup extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    if(this.props.show) {setTimeout(this.props.closePopup, 5000)}
    return (
    <div className={"popup popup-dark " + (this.props.show ? "popup-show" : "")}>
      {this.props.error ?
      <img className="popup-icon" src="/img/backoffice.svg#warning-white"/> :
      <img className="popup-icon" src="/img/backoffice.svg#checked-white"/>
      }
      <span className="popup-message">{this.props.message}</span>
    </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);