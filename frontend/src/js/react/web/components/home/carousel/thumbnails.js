const React = require("react");
import {ThumbnailLight} from '../../thumbnail';
export default (props) => {
  let thumbnails = [];
  for (let i=0; i<3; i++) {
    thumbnails.push(
      <ThumbnailLight 
      key={props.thumbnails[i]}
      className={"light  carousel-thumbnail carousel-wait"+i}
      img={props.thumbnails[i]} 
      />
    )
  }
  return (thumbnails)
}