import estilos from "./ArtigoPost.module.css";
import { Link } from "react-router-dom";

const ArtigoPost = (props) => {
    
  return (
    <article className={props.classe}>
      <Link to={`/posts/${props.id}`}>
          <h3> {props.titulo} </h3>
          <p> {props.subtitulo} </p>
      </Link>
    </article>
  );
};

export default ArtigoPost;