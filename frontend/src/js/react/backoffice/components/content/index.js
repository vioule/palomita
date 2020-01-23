const React = require("react");
import { connect } from 'react-redux';
import Topbar from './topbar';
import Articles from '../articles';
import Statistiques from './statistiques';
import Commentaires from './commentaires';
import Notfound from './notfound';
import { Route, Switch } from 'react-router-dom';

class Content extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="content">
      <Topbar />
      <Switch>
        <Route exact path="/administration/articles"><Articles /></Route>
        <Route exact path="/administration/commentaires"><Commentaires /></Route>
        <Route exact path="/administration/statistiques"><Statistiques /></Route>
        <Route path="*"><Notfound /></Route>
      </Switch>
    </div>
    )
  };
};

export default connect(null, null)(Content);