const React = require("react");
import { useState } from 'react';

export default (props) => {

  const [phLoaded, setPhLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const placeholder = new Image();
  placeholder.onload = ()=>setPhLoaded(true);
  placeholder.src = props.placeholder;

  return (
    <div className="lazyload" style={{backgroundImage: phLoaded && 'url('+props.placeholder+')'}}>
      {phLoaded && <img className="image" style={{opacity: imgLoaded ? 1 : 0}} src={props.img} onLoad={()=>setImgLoaded(true)}/>}
    </div>
    )
  };
  