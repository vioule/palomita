const React = require("react");
import Datetime from './date';
import Author from './author';
import Text from './text';
import Answer from './answer';
import CurtainRaiser from '../hoc/curtainRaiser';

export default class Reponses extends React.Component {
  render() {
    return (
      <div className="reponses">
        {this.props.reponses.map(reponse=>(
          <Reponse key={reponse._id} comment={reponse} trigger={this.props.trigger}/>
        ))}
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
      <>
        <CurtainRaiser trigger={this.props.trigger}>
          <> {/* ensure updateParent to go in the div DOM */}
            <div className="comment">
              <Author author={this.props.comment.author.name}/>
              <Datetime date={new Date(this.props.comment.date).toLocaleDateString().replace(/\//g,".")}/>
              <Text text={this.props.comment.content}/>
              <button 
                className={"btn reponse" + (this.state.reponse ? " anim" :"")}
                onClick={this.handleReponse}
              >
              </button>
            </div>
          </>
        </CurtainRaiser>
        <CurtainRaiser trigger={this.state.reponse&&this.props.trigger}>
          <Answer />
        </CurtainRaiser>
      </>
    )
  }
}