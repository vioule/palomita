const React = require("react");
import Paragraph from '../card/paragraph';
import Image from './lazyLoadImage';
import {Appear} from './lazyLoadImage';
export default (props) => {
  return <div>
  {
  props.content.map(content=>{
    return content.type=="image" ?
    <Appear key={content.id}>
      <Image img={content.data} placeholder={content.data.split('.jpg')[0]+'-placeholder.jpg'}/> 
    </Appear> :
    <Appear key={content.id}>
      <Paragraph paragraph={content.data}/>
    </Appear>
  })}
  {props.children}
  </div>
}
