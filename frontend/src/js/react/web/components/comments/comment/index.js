const React = require("react");
import Datetime from './date';
import Author from './author';
import Text from './text';
import Answer from './answer';
import Reponses from './reponse';
import CurtainRaiser from '../../curtainRaiser';


export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reponse: false,
      showReponse: false
    }
    this.handleReponse = this.handleReponse.bind(this);
    this.handleShowReponse = this.handleShowReponse.bind(this);
  };
  handleReponse() {
    this.setState(state=>{return{reponse: !state.reponse}})
  }
  handleShowReponse() {
    this.setState(state=>{return{showReponse: !state.showReponse}})
  }
  render() {
    return (
      <div className="comment">
        <Author author={this.props.comment.author.name}/>
        <Datetime date={new Date(this.props.comment.date).toLocaleDateString().replace(/\//g,".")}/>
        <Text text={this.props.comment.content}/>
        <button 
          className={"btn reponse" + (this.state.reponse ? " anim" :"")}
          onClick={this.handleReponse}
        >
        </button>
        {this.props.comment.reponse.length>0 && 
          <button className="btn right" onClick={this.handleShowReponse}>{this.props.comment.reponse.length} réponse{this.props.comment.reponse.length>1?"s":""}</button>
        }
        <CurtainRaiser trigger={this.state.reponse}>
          <Answer/>
        </CurtainRaiser>


        <Reponses trigger={this.state.showReponse} reponses={this.props.comment.reponse}/>
      </div>
    )
  }
};