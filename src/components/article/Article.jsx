import './article.css';
// eslint-disable-next-line react/prop-types
const Article = ({ imgUrl, fecha, titulo }) => {
  return (
    <div className="article">
      <div className="article-image">
        <img src={imgUrl} alt="imagen de blog" />
      </div>
      <div className="article-content">
        <div>
          <p>{fecha}</p>
          <h3>{titulo}</h3>
        </div>
        <p>Leer el articulo completo</p>
      </div>
    </div>
  );
};

export default Article;
