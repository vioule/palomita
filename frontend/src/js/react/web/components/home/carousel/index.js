const React = require("react");
import Categories from './categorie';
import Thumbnails from './thumbnails';
import Cards from './cards';

export default class Carousel extends React.Component {
  render() {
    return(
    <div className="carousel marge">

      <Categories categories={[this.props.articles[0].categorie,this.props.articles[1].categorie,this.props.articles[2].categorie]}/>

      <section className="summary left">
      <span className="info">derniers articles</span>
      <div className="carousel-thumbnails clearfix">

        <div className="thumbnail timer">
          <div className="carousel-timer"></div>
        </div>

        <Thumbnails thumbnails={[
          this.props.articles[0].content.find(el=>el.id==this.props.articles[0].vignette).data,
          this.props.articles[1].content.find(el=>el.id==this.props.articles[1].vignette).data,
          this.props.articles[2].content.find(el=>el.id==this.props.articles[2].vignette).data
        ]}/>
      </div>

      <Cards {...this.props}/>
      </section>
    </div>
  )}
};