const React = require("react");
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export class Lazy extends React.Component {
  constructor(props) {
    super(props)
    this.placeholder = new Image();
  };
  render() {
    return (
      <div className="lazyload" style={{
        backgroundImage: this.props.phLoaded && 'url('+this.placeholder.src+')',
        paddingTop: !this.props.phLoaded ? '' : this.placeholder.height/this.placeholder.width*100+'%'
        }}>
        {this.props.phLoaded && <img className="image" style={{opacity: this.props.imgLoaded ? 1 : 0}} src={this.props.img} onLoad={()=>this.props.setImgLoaded(true)}/>}
      </div>
    )
  };
  componentDidMount() {
    this.placeholder.src = '/imgPS/placeholder/?url='+this.props.img;
    this.placeholder.onload = (img)=>{this.props.setPhLoaded(true)};  
  }
};

export default (props) => {

  const [phLoaded, setPhLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div className="observer" ref={ref} style={{paddingTop: !phLoaded && '66.66%'}}>
      {!phLoaded && <span className="text">Chargement</span>}
      {inView && <Lazy 
      phLoaded={phLoaded} 
      setPhLoaded={setPhLoaded}
      imgLoaded= {imgLoaded}
      setImgLoaded={setImgLoaded} {...props}/>}
    </div>
    )
  };

export const Appear = (props) => {
  const [ref, inView] = useInView({threshold: .25,triggerOnce: true});
  return (
    <div className={"lazy-appear" + (inView ? "" : " hidden")} ref={ref}>
      {props.children}
    </div>
  )
};