const React = require("react");
import {Pinterest,Twitter,Facebook} from './icon';

export default (props) => (
  <div className="social">
    {props.share && <span className="share">partager :</span>}
    <Pinterest />
    <Twitter />
    <Facebook />
  </div>
);