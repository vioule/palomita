const React = require("react");

export default class Image extends React.Component {
  render() {
    return (
      <img className="article-image" src={this.props.data}/>
    )
  };
};