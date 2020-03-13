const React = require("react");
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';


export const Lazy = (props) => {

  const placeholder = new Image();
  placeholder.onload = ()=>props.setPhLoaded(true);
  placeholder.src = props.placeholder;

  return (
    <div className="lazyload" style={{
      backgroundImage: props.phLoaded && 'url('+props.placeholder+')',
      paddingTop: !props.phLoaded ? '' : !props.imgLoaded && placeholder.height/placeholder.width*100+'%'
      }}>
      {props.phLoaded && <img className="image" style={{opacity: props.imgLoaded ? 1 : 0}} src={props.img} onLoad={()=>props.setImgLoaded(true)}/>}
    </div>
  )
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