const React = require("react");

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
export const ArticleLeft = (props)=>(
  <section className="summary left">
    <Date date={props.date}/>
    <ThumbnailDark img={props.img} categorie={props.categorie}/>
    <CardDark title={props.title} paragraph={props.paragraph} id={props.id}>
      {/* <Social share={true}/> */}
    </CardDark>
  </section>
);
export const ArticleRight = (props)=>(
  <section className="summary right">
    <Date date={props.date}/>
    <ThumbnailDark img={props.img} categorie={props.categorie}/>
    <CardDark title={props.title} paragraph={props.paragraph} id={props.id}>
      {/* <Social share={true}/> */}
    </CardDark>
  </section>
);