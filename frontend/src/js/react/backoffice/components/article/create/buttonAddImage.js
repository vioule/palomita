const React = require("react");
import { connect } from 'react-redux';
import { addArticleImages } from '../../../actions/article';

const mapDispatchToProps = { addArticleImages };

export default connect(null, mapDispatchToProps)(
  (props) => (
  <>
  <label className="article-btn" htmlFor="imageUploader">Ajouter des images</label>
  <input type="file" id="imageUploader" name="imageUploader" accept=".jpg, .jpeg, .png" hidden multiple onChange={(e)=>props.addArticleImages(e.target.files)} value=""/>
  </>
  )
);