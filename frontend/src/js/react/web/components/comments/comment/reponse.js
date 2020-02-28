const React = require("react");
import Datetime from './date';
import Author from './author';
import Text from './text';
import Answer from '../answer';

export default class Reponses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState(state=>{return{update: !state.update}})
  };
  render() {
    let maxHeight;
    this.div && this.props.show ?
    maxHeight = this.div.clientHeight :
    maxHeight = 0
    return (
      <div className="answer-show anim" style={{maxHeight}}>
        <div className="reponses" ref={c => (this.div = c)}>
          {this.props.reponses.map(reponse=><Reponse key={reponse._id} comment={reponse} update={this.update}/>)}
        </div>
      </div>
    )
  }
};

export class Reponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reponse: false
    }
    this.handleReponse = this.handleReponse.bind(this);
  };
  handleReponse() {
    this.setState(state=>{return{reponse: !state.reponse}})
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
          <Answer show={this.state.reponse} update={this.props.update} anim={!this.state.reponse}/>
        </div>
    )
  }
}