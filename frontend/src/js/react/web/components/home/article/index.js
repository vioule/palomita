const React = require("react");
import { useInView } from 'react-intersection-observer';

import {CardDark} from '../../card';
import {ThumbnailDark} from '../../thumbnail';
import Date from '../../card/date';
import Social from '../../social';

export const ArticleLeft = (props)=>{
  const [ref, inView] = useInView({threshold: .2,triggerOnce: true});
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
  const [ref, inView] = useInView({threshold: .2,triggerOnce: true});
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