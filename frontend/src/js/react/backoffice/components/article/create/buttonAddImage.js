const React = require("react");
import { connect } from 'react-redux';
import { uploadArticleImages } from '../../../actions/article';

const mapStateToProps = state => {return{_csrf: state._csrf, infos: state.article.infos}};
const mapDispatchToProps = { uploadArticleImages };

export default connect(mapStateToProps, mapDispatchToProps)(
  (props) => (
  <>
  <label className="article-btn" htmlFor="imageUploader">Ajouter des images</label>
  <input disabled={props.infos.title && props.infos.categorie ? false : true} type="file" id="imageUploader" name="imageUploader" accept=".jpg, .jpeg, .png" hidden multiple onChange={(e)=>props.uploadArticleImages(e.target.files, props._csrf, props.infos._id)} value=""/>
  </>
  )
);