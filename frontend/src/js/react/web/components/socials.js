const React = require("react");
import { Link } from 'react-router-dom';
export default () => { 
  let socials = [
  {
    name: "Instagram",
    link: "/"
  }, 
  {
    name: "Facebook",
    link: "/"
  }, 
  {
    name: "Pinterest",
    link: "/"
  }];
  return (
  <ul className="menu-info-item socials">
    {socials.map(social=><li key={social.name} className="socials-item border-bottom-center">
      <Link to={social.link}>
        {social.name}
      </Link>
    </li>)}
  </ul>
)}