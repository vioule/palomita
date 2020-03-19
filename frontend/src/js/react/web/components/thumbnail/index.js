import LazyLoadImage from "./lazyLoadImage";
import { useInView } from 'react-intersection-observer';

const React = require("react");
export const Thumbnail = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  return (
    <div className={"thumbnail " + props.className} ref={ref}>
      {inView && <LazyLoadImage img={props.img}/>}
      <span className="categorie">{props.categorie}</span>
      {props.children}
    </div>
  )
};

export const ThumbnailLight = (props) => <Thumbnail className="light" {...props}/>;
export const ThumbnailDark = (props) => <Thumbnail className="dark" {...props}/>;