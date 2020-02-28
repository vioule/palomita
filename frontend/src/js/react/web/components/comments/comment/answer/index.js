const React = require("react");
import autosize from "autosize";

export default class Anwser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: '',
      web: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
  };  
  handleChange(e, key) {
    this.setState({[key]: e.target.value})
    if (this.props.updateParent) {
      this.props.updateParent();
    }
  };
  render() {
    return (
      <div className="answer">
        <input className="name" type="text" name="" value={this.state.name} onChange={(e)=>this.handleChange(e,"name")} placeholder="Votre nom"/>
        <input className="contact" type="text" name="" value={this.state.contact} onChange={(e)=>this.handleChange(e,"contact")} placeholder="Adresse mail"/>
        <input className="web" type="text" name="" value={this.state.web} onChange={(e)=>this.handleChange(e,"web")} placeholder="Site web"/>
        <textarea ref={c => (this.textarea = c)} className="text" type="text" name="" value={this.state.content} onChange={(e)=>this.handleChange(e,"content")}  placeholder="Entre ton commentaire ici..."/>
        <button 
          className="btn"
          onClick={this.handleClick}
        > Commenter
        </button>
      </div>
    )
  };
  componentDidMount() {
    autosize(this.textarea);
  }
};