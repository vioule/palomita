const React = require("react");
import { connect } from 'react-redux';
import { setArticleContentSelected as onFocus, setArticleContent as onInput } from '../../../actions/article';

export default class TextArea extends React.Component {
  constructor(props){
    super(props)
    this.data= this.props.data
  }
  render() {
    return (
      <div 
      contentEditable={!this.props.readOnly}
      className="article-content" 
      onFocus={this.props.onFocus}
      onBlur={this.props.onBlur}
      onInput={this.props.onInput}
      onKeyDown={this.props.onKeyDown}
      ref={c => (this.textarea = c)}
      readOnly={this.props.readOnly}
      dangerouslySetInnerHTML={{__html: this.data}}
      >
      </div>
    )
  };
};

const TextAreaConnect = (props) => (
  <TextArea 
  onFocus = { () => { props.onFocus(props.index) }} 
  onBlur = { () => props.onFocus(-1) } 
  onInput = { (e) => props.onInput(props.index, e.target.innerHTML) }
  onKeyDown = { (e) => { if( e.keyCode==13 && !e.ctrlKey ) { e.preventDefault() }}} 
  readOnly = {props.validate}
  data = {props.data}
  />
)

export const TextAreaConnected = connect(null, {onFocus, onInput})(TextAreaConnect)