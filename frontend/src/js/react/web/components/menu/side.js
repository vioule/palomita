const React = require("react");
import Categorie from './categorie';
import Info from './info';
import Search from './search';
import Socials from '../socials';

export const Side = (props) => { return (
<nav className={"menu-sided"+(props.class||'')}>
  <ul className={"menu-center"+(props.secondClass||'')}>
    {props.children}
  </ul>
</nav>
)};

export const Categories = (props) => {
  let categories = ["deco", "style", "cuisine", "voyages"];
  return (
  <Side class=" menu-color">{
    categories.map((categorie, index)=><Categorie key={categorie} name={categorie} {...props}/>)
  }</Side>
  )
};

export const Infos = () => {
  return (
    <Side secondClass=" menu-center-info clearfix">
      <Info name="Contact"/>
      <Info name="A propos"/>
      <Search/>
      <Socials/>
    </Side>
  )
};
