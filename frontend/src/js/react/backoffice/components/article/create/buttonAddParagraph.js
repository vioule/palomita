const React = require("react");
import { connect } from 'react-redux';
import { addArticleParagraph } from '../../../actions/article';

const mapStateToProps = state => {return{infos: state.article.infos}};
const mapDispatchToProps = { addArticleParagraph };

export default connect(mapStateToProps, mapDispatchToProps)(
  (props) => (
  <button className="article-btn" onClick={ props.infos.title && props.infos.categorie ? props.addArticleParagraph : null}>Ajouter un paragraphe</button>
  )
  )