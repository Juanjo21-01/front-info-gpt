import { Article } from '../../components';
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from '../../components/article/imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">
          Están sucediendo muchas cosas y estamos escribiendo al respecto.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article
            imgUrl={blog01}
            fecha="Sep 20, 2023"
            titulo="GPT-4 y OpenIA es el futuro. Nosotros vamos a explorar esto?"
          />
        </div>
        <div className="blog-container-groupB">
          <Article
            imgUrl={blog02}
            fecha="Sep 20, 2023"
            titulo="GPT-4 y OpenIA es el futuro. Nosotros vamos a explorar esto?"
          />
          <Article
            imgUrl={blog03}
            fecha="Sep 20, 2023"
            titulo="GPT-4 y OpenIA es el futuro. Nosotros vamos a explorar esto?"
          />
          <Article
            imgUrl={blog04}
            fecha="Sep 20, 2023"
            titulo="GPT-4 y OpenIA es el futuro. Nosotros vamos a explorar esto?"
          />
          <Article
            imgUrl={blog05}
            fecha="Sep 20, 2023"
            titulo="GPT-4 y OpenIA es el futuro. Nosotros vamos a explorar esto?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
