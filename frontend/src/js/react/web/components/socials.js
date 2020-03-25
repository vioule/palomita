const React = require("react");
import { Link } from 'react-router-dom';
export default () => { 
  let socials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/estellepalomita/"
  }, 
  {
    name: "Pinterest",
    link: "https://www.pinterest.fr/EstellePalomita/"
  }];
  return (
  <ul className="menu-info-item socials">
    {socials.map(social=><li key={social.name} className="socials-item border-bottom-center">
      <a href={social.link} target="_blank">
        {social.name}
      </a>
    </li>)}
  </ul>
)}