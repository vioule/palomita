const React = require("react");
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { TextAreaConnected } from './textArea';
import MakeEditable from './makeEditable';
import Image from './image';

export const SortableParagraph = SortableElement(MakeEditable(TextAreaConnected));
export const SortableImage = SortableElement(MakeEditable(Image));

export default SortableContainer(({items}) => {
  return (
    <div>
      {items.map((item, index) => {
        return item.type === "paragraph" ?
          <SortableParagraph key={item.id} index={index} i={index}/> :
          <SortableImage key={item.id} index={index} i={index} data={item.data}/>
      })}
    </div>
  );
});