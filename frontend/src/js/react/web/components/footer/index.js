const React = require("react");
import { Link } from 'react-router-dom';
import { Socials } from '../social/text';

export default () => (
<footer className="footer marge">
  <span className="copyright">©Palomita</span>
  <Socials />
  <Link to="/" className="link">Mentions légales</Link>
</footer>
);