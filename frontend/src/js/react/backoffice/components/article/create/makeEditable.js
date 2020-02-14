const React = require("react");
import {ButtonDeleteArticleItem} from './buttonDelete';

export default (OriginalComponent) => {
  return class extends React.Component {
    render() {
      //console.log(this.props)
      return (
        <div className="article-item">
          <OriginalComponent index={this.props.i} data={this.props.data} validate={this.props.validate}/>
          { !this.props.validate && <ButtonDeleteArticleItem index={this.props.i}/> }
        </div>
      )
    };
  };
};