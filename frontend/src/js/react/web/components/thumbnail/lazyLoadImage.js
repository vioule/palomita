const React = require("react");
import { useState } from 'react';

export default (props) => {

  const [phLoaded, setPhLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const placeholder = new Image();
  placeholder.onload = ()=>setPhLoaded(true);
  placeholder.src = '/imgPS/placeholder/?url='+props.img;

  return (
    <div className="lazyload" style={{backgroundImage: phLoaded && 'url('+placeholder.src+')'}}>
      {!phLoaded && <span className="text">Chargement</span>}
      {phLoaded && <img className="image" style={{opacity: imgLoaded ? 1 : 0}} src={props.img} onLoad={()=>setImgLoaded(true)}/>}
    </div>
    )
  };
  