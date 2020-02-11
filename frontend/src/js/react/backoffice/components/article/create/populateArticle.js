const React = require("react");
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import TextArea from './textArea';
import MakeEditable from './makeEditable';

export const SortableParagraph = SortableElement(MakeEditable(TextArea))
export const SortableImage = SortableElement(MakeEditable(()=><div>IMAGE</div>))

export default SortableContainer(({items}) => {
  return (
    <div>
      {items.map((item, index) => {
        return item.type === "paragraph" ?
          <SortableParagraph key={item.id} index={index} i={index} /> :
          <SortableImage key={item.id} index={index} i={index} />
      })}
    </div>
  );
});