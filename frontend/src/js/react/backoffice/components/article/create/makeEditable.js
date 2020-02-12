const React = require("react");
import {ButtonDeleteArticleItem} from './buttonDelete';

export default (OriginalComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div className="article-item">
          <OriginalComponent index={this.props.i} data={this.props.data}/>
          <ButtonDeleteArticleItem index={this.props.i}/>
        </div>
      )
    };
  };
};