const React = require("react");
import { connect } from 'react-redux';
import { addArticleParagraph } from '../../../actions/article';

const mapDispatchToProps = { addArticleParagraph };

export default connect(null, mapDispatchToProps)((props) => (<button className="article-btn" onClick={props.addArticleParagraph}>Ajouter un paragraphe</button>))