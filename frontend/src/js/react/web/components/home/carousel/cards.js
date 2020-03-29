const React = require("react");
import {CardLight} from '../../card';

export default class Cards extends React.Component {
  constructor(props){
    super(props);
    this.handleAnimation = this.handleAnimation.bind(this);
    this.setHeights = this.setHeights.bind(this);
    this.handleResize = "";
    this.classes = ['enter', 'out', 'in'];
    this.ref0 = React.createRef();
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.state = {
      timer: 0
    }
    this.setInterval = null;
  }
  componentDidMount(){
    this.setInterval = setInterval(this.handleAnimation, 7000);
    this.refs = [this.ref0, this.ref1, this.ref2];
    this.heights = [this.ref0.clientHeight, this.ref1.clientHeight, this.ref2.clientHeight];
    window.onresize = () => { clearTimeout(this.handleResize); this.handleResize = setTimeout(this.setHeights, 300)}
  };
  componentWillUnmount(){
    clearTimeout(this.handleResize);
    clearInterval(this.setInterval);
    window.onresize = null;
  }
  handleAnimation(){
    this.classes.push(this.classes.shift());
    this.state.timer>0 ?
    this.setState(state=>{return{timer: state.timer-1}}) :
    this.setState({timer: 2})
  };
  setHeights(){
    this.heights = [this.ref0.clientHeight, this.ref1.clientHeight, this.ref2.clientHeight];
    this.forceUpdate();
  };
  render() {
    return(
      <div 
      className="carousel-cards" 
      style={{height: this.refs[this.state.timer] && this.heights[this.state.timer]+'px'}}
      >
        <CardLight 
        inputRef = {c=>this.ref0 = c}
        className={this.classes[0]}
        date={new Date(this.props.articles[0].date).toLocaleDateString().replace(/\//g,".")} 
        title={this.props.articles[0].title} 
        paragraph={this.props.articles[0].content.find(el=>el.type=="paragraph").data} 
        id={this.props.articles[0]._id}
        />
        <CardLight 
        inputRef = {c=>this.ref1 = c}
        className={this.classes[1]}
        date={new Date(this.props.articles[1].date).toLocaleDateString().replace(/\//g,".")} 
        title={this.props.articles[1].title} 
        paragraph={this.props.articles[1].content.find(el=>el.type=="paragraph").data} 
        id={this.props.articles[1]._id}
        />
        <CardLight 
        inputRef = {c=>this.ref2 = c}
        className={this.classes[2]}
        date={new Date(this.props.articles[2].date).toLocaleDateString().replace(/\//g,".")} 
        title={this.props.articles[2].title} 
        paragraph={this.props.articles[2].content.find(el=>el.type=="paragraph").data} 
        id={this.props.articles[2]._id}
        />
      </div>
  )}
};