const React = require("react");
export const Icon = (props) => (
  <a className="icon" href={props.url}>
    <img className="image" src={props.src}/>
  </a>
);

export const Instagram = () => (
  <Icon url="https://www.instagram.com/" src="/img/icons.svg#instagram-dark"/>
);
export const Facebook = () => (
  <Icon url="https://www.facebook.com/" src="/img/icons.svg#facebook-dark"/>
);
export const Twitter = () => (
  <Icon url="https://www.twitter.com/" src="/img/icons.svg#twitter-dark"/>
);
export const Pinterest = () => (
  <Icon url="https://www.pinterest.com/" src="/img/icons.svg#pinterest-dark"/>
);