const React = require("react");
import { connect } from 'react-redux';
import { addArticleImage } from '../../../actions/article';

const mapStateToProps = state => {return{_csrf: state._csrf, infos: state.article.infos}};
const mapDispatchToProps = { addArticleImage };

export default connect(mapStateToProps, mapDispatchToProps)(
  (props) => (
  <>
  <label className="article-btn" htmlFor="imageUploader">Ajouter une image</label>
  <input disabled={props.infos.title && props.infos.categorie ? false : true} 
  type="file" 
  id="imageUploader" 
  name="imageUploader" 
  accept=".jpg, .jpeg, .png" 
  hidden 
  onChange={(e)=>props.addArticleImage(e.target.files[0])}
  value=""/>
  </>
  )
);


// #1 upload image par image                       DONE
// #2 enregistre le blob dans le store data        DONE
// #3 afficher le blob                             DONE
// #4 envoyer les blobs au back                    DONE
// #5 modifier la taille et créer un placeholder   DONE
// #6 sauvegarder les images et placeholders       DONE
// #7 enregistre les images dans le store data     DONE
// #8 revokeObjectURL des blobs                    DONE