const React = require("react");
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => { return {showAll: state.comments.showAll} };

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    if (!this.props.showAll) {
      this.setState({open: !this.state.open});
    }
  };
  render() {
    return (
    <>
    <tr className={"table-tr " + (!this.props.article.read ? "table-tr-new ": "")+ (this.state.open || this.props.showAll ? "table-tr-open" : "")} onClick={this.handleClick}>
      <td className={"table-td " + (this.props.article.type === "reponse" ? "table-td-reponse" : "")}><span className="table-td-wrap">{this.props.article.parent.title}</span></td>
      <td className="table-td">
        <span className="table-td-wrap">{this.props.article.author.name} {this.props.article.author.role == "admin" ?  <span className="comment-role">({this.props.article.author.role})</span> : null}</span>
        {this.state.open || this.props.showAll ? 
          <span className="table-td-info table-td-wrap"> <br/> {this.props.article.author.contact} <br/> {this.props.article.author.web} </span> : null}
      </td>
      <td className="table-td">{new Date(this.props.article.date).toLocaleDateString()}</td>
      <td className="table-td">{this.props.article.reponse.length}</td>
      <td className="table-td">
        <Link to={"commentaire/"+(this.props.article._id)}>
        <img className="table-icon table-icon-loupe" src="/img/backoffice.svg#loupe-blue"/>
        </Link>
      </td>
      <td className="table-td">
        <Link to={{pathname:"commentaire/"+this.props.article._id+"/answer", state: this.props.article}}>
          <img className="table-icon table-icon-reponse" src="/img/backoffice.svg#reponse-blue"/>
        </Link>
      </td>
      <td className="table-td">
        <Link to={{pathname:"commentaire/"+this.props.article._id+"/delete", state: this.props.article}}>
          <img className="table-icon table-icon-delete" src="/img/backoffice.svg#delete-blue"/>
        </Link>
      </td>
    </tr>
    {this.state.open || this.props.showAll ?
    <tr className={"table-tr " + (this.state.open || this.props.showAll ? "table-tr-open" : "")}>
      <td className="table-td table-td-content" colSpan="4">
        <span className="table-td-span">{this.props.article.content}</span>
      </td>
      <td className="table-td" colSpan="3"></td>
    </tr>:null}
    </>
    )
  };
  componentDidUpdate(prevProps){
    if (this.props.showAll !== prevProps.showAll && this.props.showAll) {
      this.setState({open: false})
    }
  }
};

export default connect(mapStateToProps, null)(Item);