const React = require("react");
import Text from './text';
import {Dark as TextDark} from './text';
import Vignette from './vignette';

import {CardDark, CardLight} from '../../card';
import {ThumbnailDark} from '../../thumbnail';
import Date from '../../card/date';
import Social from '../../social';

export const Article = {
  Text,
  Vignette
}
export const ArticleDarkLeft = (props)=>(
  <article className="articles-left">
    <TextDark {...props}/>
    <Vignette/>
  </article>
);
export const ArticleDarkRight = (props)=>(
  <article className="articles-right">
    <TextDark {...props}/>
    <Vignette/>
  </article>
);

export const ArticleLeft = (props)=>(
  <section className="summary left">
    <Date date={props.date}/>
    <ThumbnailDark img={props.img} categorie={props.categorie}/>
    <CardDark title={props.title} paragraph={props.paragraph}>
      <Social share={true}/>
    </CardDark>
  </section>
);
export const ArticleRight = (props)=>(
  <section className="summary right">
    <Date date={props.date}/>
    <ThumbnailDark img={props.img} categorie={props.categorie}/>
    <CardDark title={props.title} paragraph={props.paragraph}>
      <Social share={true}/>
    </CardDark>
  </section>
);