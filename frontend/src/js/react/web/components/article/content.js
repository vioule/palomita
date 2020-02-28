const React = require("react");
import Paragraph from '../card/paragraph';
import Image from '../thumbnail/image';
export default (props) => {
  return <div>
  {
  props.content.map(content=>{
    return content.type=="image" ?
    <Image key={content.id} img={content.data}/> :
    <Paragraph key={content.id} paragraph={content.data}/>})
  }
  {props.children}
  </div>
}
