const React = require("react");
import { useInView } from 'react-intersection-observer'

import {CardDark, CardLight} from '../../card';
import {ThumbnailDark, ThumbnailLight} from '../../thumbnail';
import Date from '../../card/date';
import Social from '../../social';


export const Article = (props)=>(
  <section className="summary left">
    <span className="info">dernier article</span>
    <ThumbnailLight img={props.img} />
    <CardLight date={props.date} title={props.title} paragraph={props.paragraph} id={props.id}/>
    {/* <span className="index"><span className="number">1</span>.</span> */}
  </section>
);
export const ArticleLeft = (props)=>{
  const [ref, inView, entry] = useInView({threshold: .5,triggerOnce: true});
  return (
    <section className={"summary left" + (inView ? "" : " hidden")} ref={ref}>
      <Date date={props.date}/>
      <ThumbnailDark img={props.img} categorie={props.categorie}/>
      <CardDark title={props.title} paragraph={props.paragraph} id={props.id}>
        {/* <Social share={true}/> */}
      </CardDark>
    </section>
  )
};
export const ArticleRight = (props)=>{
  const [ref, inView, entry] = useInView({threshold: .5,triggerOnce: true});
  return (
  <section className={"summary right" + (inView ? "" : " hidden")} ref={ref}>
    <Date date={props.date}/>
    <ThumbnailDark img={props.img} categorie={props.categorie}/>
    <CardDark title={props.title} paragraph={props.paragraph} id={props.id}>
      {/* <Social share={true}/> */}
    </CardDark>
  </section>
  )
};