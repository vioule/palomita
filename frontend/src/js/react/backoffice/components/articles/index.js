const React = require("react");
import Navbar from './navbar';

class Articles extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="content-page">
      <Navbar />
      <table className="table table-light">
        <thead className="table-head">
          <tr>
            <th>Article</th>
            <th>Date</th>
            <th>Catégorie</th>
            <th>Commentaires</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td className="table-td">Marrakech city guide</td>
            <td className="table-td">03/10/2019</td>
            <td className="table-td">Voyage</td>
            <td className="table-td">24</td>
            <td className="table-td"><img className="table-icon table-icon-edit" src="/img/backoffice.svg#edit-blue"/></td>
            <td className="table-td"><img className="table-icon table-icon-delete" src="/img/backoffice.svg#delete-blue"/></td>
          </tr>
          <tr>
            <td className="table-td">Marrakech city guide</td>
            <td className="table-td">03/10/2019</td>
            <td className="table-td">Voyage</td>
            <td className="table-td">24</td>
            <td className="table-td"><img className="table-icon table-icon-edit" src="/img/backoffice.svg#edit-blue"/></td>
            <td className="table-td"><img className="table-icon table-icon-delete" src="/img/backoffice.svg#delete-blue"/></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  };
};

export default Articles;