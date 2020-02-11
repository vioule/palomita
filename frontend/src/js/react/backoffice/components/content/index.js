const React = require("react");
import { connect } from 'react-redux';
import Articles from '../articles';
import Statistiques from './statistiques';
import Commentaires from '../commentaires';
import Commentaire from '../commentaire';
import Answer from '../commentaire/answer';
import Comment from '../commentaire/create';
import DeleteCommentaire from '../commentaire/delete';
import DeleteArticle from '../article/delete';
import CreateArticle from '../article/create/';
import Notfound from './notfound';
import { Route, Switch } from 'react-router-dom';

class Content extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
    <div className="content">
      <Switch>
        <Route exact path="/administration/articles"><Articles /></Route>
        <Route exact path="/administration/article/:articleID/delete" component={(props=this.props)=><DeleteArticle {...props}/>}/>
        <Route exact path="/administration/article/:articleID/comment" component={(props=this.props)=><Comment {...props}/>}/>
        <Route exact path="/administration/article/create" component={(props=this.props)=><CreateArticle {...props}/>}/>
        <Route exact path="/administration/commentaires"><Commentaires /></Route>
        <Route exact path="/administration/commentaire/:commentID" component={(props=this.props)=><Commentaire {...props}/>}/>
        <Route exact path="/administration/commentaire/:commentID/answer" component={(props=this.props)=><Answer {...props}/>}/>
        <Route exact path="/administration/commentaire/:commentID/delete" component={(props=this.props)=><DeleteCommentaire {...props}/>}/>
        <Route exact path="/administration/statistiques"><Statistiques /></Route>
        <Route path="*"><Notfound /></Route>
      </Switch>
    </div>
    )
  };
};

export default connect(null, null)(Content);