const React = require("react");
import Categorie from './categorie';
export const Side = (props) => { return (
<nav className={"menu-sided"+(props.class||'')}>
  <ul className="menu-center text-dark">
    {props.children}
  </ul>
</nav>
)};

export const Categories = () => {
  let categories = ["Deco", "Style", "Cuisine", "Voyages"];
  return (
  <Side class=" menu-color">{
    categories.map(categorie=><Categorie key={categorie} name={categorie}/>)
  }</Side>
  )
}
