import Categorie from "./categorie";
import Image from "./image";

const React = require("react");
export const Thumbnail = (props) => (
<div className={"thumbnail " + props.className}>
  <Image img={props.img}/>
  <span className="categorie">{props.categorie}</span>
  {props.children}
</div>
);

export const ThumbnailLight = (props) => <Thumbnail className="light" {...props}/>;
export const ThumbnailDark = (props) => <Thumbnail className="dark" {...props}/>;