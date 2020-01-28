const React = require("react");
import { Link } from 'react-router-dom';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    this.setState({open: !this.state.open});
  };
  render() {
    return (
    <>
    <tr className={"table-tr " + (this.state.open ? "table-tr-open" : "")} onClick={this.handleClick}>
      <td className={"table-td " + (this.props.type === "reponse" ? "table-td-reponse" : "")}><span className="table-td-wrap">{this.props.parent.title}</span></td>
      <td className="table-td">
        <span className="table-td-wrap">{this.props.author.name}</span>
        {this.state.open ? 
          <span className="table-td-info table-td-wrap"> <br/> {this.props.author.contact} <br/> {this.props.author.web} </span> : null}
      </td>
      <td className="table-td">{new Date(this.props.date).toLocaleDateString()}</td>
      <td className="table-td">{this.props.reponse.length}</td>
      <td className="table-td"><img className="table-icon table-icon-loupe" src="/img/backoffice.svg#loupe-blue"/></td>
      <td className="table-td"><img className="table-icon table-icon-reponse" src="/img/backoffice.svg#reponse-blue"/></td>
      <td className="table-td"><img className="table-icon table-icon-delete" src="/img/backoffice.svg#delete-blue"/></td>
    </tr>
    {this.state.open ?
    <tr className={"table-tr " + (this.state.open ? "table-tr-open" : "")}>
      <td className="table-td table-td-content" colSpan="4">
        <span className="table-td-span">{this.props.content}</span>
      </td>
      <td colSpan="3"></td>
    </tr>:null}
    </>
    )
  };
};

export default Item;