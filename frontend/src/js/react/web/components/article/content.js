const React = require("react");
import Paragraph from '../card/paragraph';
import Image from './lazyLoadImage';
export default (props) => {
  return <div>
  {
  props.content.map(content=>{
    return content.type=="image" ?
    <Image key={content.id} img={content.data} placeholder={content.data.split('.jpg')[0]+'-placeholder.jpg'}/> :
    <Paragraph key={content.id} paragraph={content.data}/>})
  }
  {props.children}
  </div>
}
