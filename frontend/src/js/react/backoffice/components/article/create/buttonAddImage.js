const React = require("react");
import { connect } from 'react-redux';
import { addArticleImage } from '../../../actions/article';

const mapDispatchToProps = { addArticleImage };

export default connect(null, mapDispatchToProps)((props) => (<button className="article-btn" onClick={props.addArticleImage}>Ajouter une image</button>))