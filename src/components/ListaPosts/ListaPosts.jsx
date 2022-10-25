import { useState, useEffect } from "react"; // Hooks do React
import LoadingDesenho from "../Loading/LoadingDesenho";
import {Link} from "react-router-dom";
import serverApi from "../../api/serverApi";
import estilos from "./ListaPosts.module.css";
const ListaPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState(0);
  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
        setLink(dados.id);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, []);

  // Uso de state imagem loading - uso de renderização condicional
  if (loading) {
    // return <mark style={{ backgroundColor: "red" }}>Carregando....</mark>;
    return <LoadingDesenho/>
  } 
  const url = `http://localhost:3000/posts/${link}`;
  
  // else {n
    // return <mark>Carregado!</mark>;
  // }
   

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
          <article className={estilos.post} key={id}>
            <Link exact to={url}>
            <h3> {titulo} </h3>
            <p>{subtitulo}</p>
            </Link>
          </article>
      ))}
    </div>
  );
};

export default ListaPosts;

