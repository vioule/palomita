const React = require("react");
import { connect } from 'react-redux';
import { deleteArticleItem } from '../../../actions/article';
const mapDispatchToProps = { onClick: deleteArticleItem };

export default function ButtonDelete(props) { 
  return (
  <button className="article-btn-delete" onClick={props.onClick}>
    <img className="table-icon table-icon-delete" src="/img/backoffice.svg#delete-blue"/>
  </button>
  );
}

const DeleteArticleItem = (props) => {
  return <ButtonDelete onClick={()=>props.onClick(props.index)}/>
}

export const ButtonDeleteArticleItem = connect(null, mapDispatchToProps)(DeleteArticleItem);
