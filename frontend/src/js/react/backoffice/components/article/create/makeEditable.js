const React = require("react");
import {ButtonDeleteArticleItem} from './buttonDelete';

export default (OriginalComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div className="article-item">
          <OriginalComponent/>
          <ButtonDeleteArticleItem index={this.props.i}/>
        </div>
      )
    };
  };
};