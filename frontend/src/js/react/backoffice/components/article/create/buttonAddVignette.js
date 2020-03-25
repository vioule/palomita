const React = require("react");
import { connect } from 'react-redux';
import { setArticleVignette } from '../../../actions/article';

const mapDispatchToProps = { setArticleVignette };

export class Vignette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick() {
    this.setState(state=>{return{open: !state.open}})  
  };
  render() { 
    let imgs = this.props.article.content.filter(el=>el.type=="image");
    let vignette = imgs.filter(el=>el.id==this.props.article.infos.vignette);
    vignette.length==0 ? 
    vignette='/img/backoffice.svg#camera-blue' :
    vignette = vignette[0].data
    return (
    <div className="vignette" onClick={this.props.article.infos.validate ? null : this.handleOnClick}>
      <img className="vignette-icon" src={vignette}/>
      <ul className={"vignette-list" + (this.state.open ? ' vignette-list-show' : '')}>
        {imgs.map(
          img=><li 
          className="vignette-item" 
          key={img.id} 
          onClick={()=>this.props.setArticleVignette(img.id)}
          >
            <img className="vignette-img" src={img.data}/>
          </li>
        )}
      </ul>
    </div>
  )}
  componentDidUpdate(prevProps) {
    if (prevProps.article.infos.validate != this.props.article.infos.validate) {
      if (this.props.article.infos.validate && this.state.open) {
        this.setState(state=>{return{open: !state.open}})
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Vignette);