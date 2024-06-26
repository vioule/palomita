const React = require("react");
export const Text = (props) => (
  <a className="text border-bottom-center" href={props.url} target="_blank">
    {props.text}
  </a>
);

export const Instagram = () => (
  <Text url="https://www.instagram.com/estellepalomita/" text="Instagram"/>
);
export const Facebook = () => (
  <Text url="https://www.facebook.com/" text="Facebook"/>
);
export const Twitter = () => (
  <Text url="https://www.twitter.com/" text="Twitter"/>
);
export const Pinterest = () => (
  <Text url="https://www.pinterest.fr/EstellePalomita/" text="Pinterest"/>
);

export const Socials = () => (
  <div className="socials">
    <Instagram />
    <Pinterest />
  </div>
)