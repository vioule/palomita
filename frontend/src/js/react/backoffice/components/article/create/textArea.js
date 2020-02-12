const React = require("react");
// import autosize from "autosize";
import { connect } from 'react-redux';
import { setArticleContentSelected as onFocus, setArticleContent as onInput } from '../../../actions/article';

export default class TextArea extends React.Component {
  render() {
    return (
      <div 
      contentEditable
      className="article-content" 
      onFocus={this.props.onFocus}
      onBlur={this.props.onBlur}
      onInput={this.props.onInput}
      onKeyDown={(e)=>{if(e.keyCode==13 && !e.ctrlKey){e.preventDefault()}}}
      ref={c => (this.textarea = c)}
      >
      </div>
    )
  };
};
// export default class TextArea extends React.Component {
//   render() {
//     return (
//       <textarea 
//         form="article-create" 
//         type="text" 
//         className="article-content" 
//         name="article-content" 
//         id="article-content" 
//         placeholder="Entre le contenu de ton paragraphe ici..." 
//         ref={c => (this.textarea = c)} 
//         onFocus={this.props.onFocus}
//         onBlur={this.props.onBlur}
//       />
//     )
//   };
//   componentDidMount() {
//     autosize(this.textarea);
//   };
// };

const TextAreaConnect = (props) => (
  <TextArea 
  onFocus = { () => { props.onFocus(props.index) }} 
  onBlur = { () => props.onFocus(-1) } 
  onInput = { (e) => props.onInput(props.index, e.target.innerHTML) }
  />
)

export const TextAreaConnected = connect(null, {onFocus, onInput})(TextAreaConnect)