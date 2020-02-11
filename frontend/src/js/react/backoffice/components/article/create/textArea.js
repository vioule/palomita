const React = require("react");
import autosize from "autosize";

export default class TextArea extends React.Component {
  render() {
    return (
      <textarea form="article-create" type="text" className="article-content" name="article-content" id="article-content" placeholder="Entre le contenu de ton paragraphe ici..." ref={c => (this.textarea = c)} />
    )
  };
  componentDidMount() {
    autosize(this.textarea);
  };
};