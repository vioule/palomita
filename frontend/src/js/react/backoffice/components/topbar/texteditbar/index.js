const React = require("react");
import { connect } from 'react-redux';

const mapStateToProps = (state) => { return {index: state.article.infos.selected}};
const mapDispatchToProps = {};

class TextEditBar extends React.Component {
  render() {
    return (
      <ul className={"topbar-search-types " + (this.props.index>=0 ? "topbar-search-types-show" : "")}>
        <li onMouseDown={(e)=>e.preventDefault()} onClick={()=>document.execCommand("bold",false,null)} className={"topbar-search-type " + (this.props.type=="title" ? "topbar-search-type-selected" : "")}>Bold</li>
      </ul>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditBar);