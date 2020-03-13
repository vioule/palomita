const React = require("react");
import { Link } from 'react-router-dom';
import { Socials } from '../social/text';

export default () => (
<footer className="footer marge">
  <Socials />
  <div className="legals clearfix">
    <span className="copyright">©Palomita - </span>
    <Link to="/legals" className="link">Mentions légales</Link>
  </div>
</footer>
);