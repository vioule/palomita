const React = require("react");
import { connect } from 'react-redux'
import { setAnswerValidate } from '../../actions/answer';

const mapStateToProps = (state) => { return {
  validate: state.answer.validate,
  content: state.answer.data.content
}}
const mapDispatchToProps = { setAnswerValidate }

class Topbar extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="topbar topbar-light">
      <button className="topbar-btn" onClick={this.props.validate ? 
        ()=>this.props.setAnswerValidate(false) :
        ()=>this.props.history.goBack()}>
        <img className="topbar-icon topbar-icon-leftarrow" src="/img/backoffice.svg#leftarrow-blue"/>
      </button>
      {this.props.title!="Conversation" ? 
      window.location.pathname.includes("delete") ? "Supprimer " :
      this.props.validate ? "Publier " : "Nouveau " : ""}
      {this.props.title}
      {this.props.rightBtn && !this.props.validate && this.props.content ? 
      <button className="topbar-btn topbar-btn-right" onClick={()=>this.props.setAnswerValidate(true)}><img className="topbar-icon topbar-icon-rightarrow" src="/img/backoffice.svg#rightarrow-blue"/></button> : null}
    </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);