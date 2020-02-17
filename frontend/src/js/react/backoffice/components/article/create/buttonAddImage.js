const React = require("react");
import { connect } from 'react-redux';
import { uploadArticleImages } from '../../../actions/article';

const mapStateToProps = state => {return{_csrf: state._csrf, _id: state.article.infos._id}};
const mapDispatchToProps = { uploadArticleImages };

export default connect(mapStateToProps, mapDispatchToProps)(
  (props) => (
  <>
  <label className="article-btn" htmlFor="imageUploader">Ajouter des images</label>
  <input type="file" id="imageUploader" name="imageUploader" accept=".jpg, .jpeg, .png" hidden multiple onChange={(e)=>props.uploadArticleImages(e.target.files, props._csrf, props._id)} value=""/>
  </>
  )
);