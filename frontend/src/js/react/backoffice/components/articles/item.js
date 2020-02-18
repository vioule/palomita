const React = require("react");
import { Link } from 'react-router-dom';

class Item extends React.Component {
  render() {
    return (
    <tr className="table-tr">
      <td className="table-td"><span className="table-td-wrap">{this.props.title}</span></td>
      <td className="table-td">{this.props.categorie}</td>
      <td className="table-td">{new Date(this.props.date).toLocaleDateString()}</td>
      <td className="table-td">{this.props.comments.length}</td>
      <td className="table-td">
        { this.props.published &&   
        <Link to={{pathname:"article/"+this.props._id+"/comment", state: this.props}}>
          <img className="table-icon table-icon-comment" src="/img/backoffice.svg#commentaires-blue"/>
        </Link>
        }
      </td>
      <td className="table-td">
        <Link to={{pathname:"article/"+this.props._id+"/edit", state: this.props}}>
          <img className="table-icon table-icon-edit" src="/img/backoffice.svg#edit-blue"/>
        </Link>
      </td>
      <td className="table-td">
        <Link to={{pathname:"article/"+this.props._id+"/delete", state: this.props}}>
          <img className="table-icon table-icon-delete" src="/img/backoffice.svg#delete-blue"/>
        </Link>
      </td>
    </tr>
    )
  };
};

export default Item;