import Title from "./title";
import Paragraph from "./paragraph";
import Link from "./link";
import Date from "./date";

const React = require("react");
export const Card = (props) => (
<article className={"card " + props.className}>
  {props.date && <Date date={props.date}/>}
  <Title title={props.title}/>
  <Paragraph paragraph={props.paragraph}/>
  <Link id={props.id}/>
  {props.children}
</article>
);

export const CardLight = (props) => <Card className="light" {...props}/>;
export const CardDark = (props) => <Card className="dark" {...props}/>;