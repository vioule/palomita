const React = require("react");
export default (props) => {
  let categories = [];
  for (let i=0; i<3; i++) {
    categories.push(<span key={props.categories[i]+i} className={"carousel-categorie carousel-wait"+i}>{props.categories[i]}</span>)
  }
  return (categories)
}