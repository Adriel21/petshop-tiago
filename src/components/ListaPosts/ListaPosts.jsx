import { useState, useEffect } from "react"; // Hooks do React
import LoadingDesenho from "../Loading/LoadingDesenho";

import serverApi from "../../api/serverApi";
import estilos from "./ListaPosts.module.css";
const ListaPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, []);

  if (loading) {
    // return <mark style={{ backgroundColor: "red" }}>Carregando....</mark>;
    return <LoadingDesenho/>
  } 
  
  // else {n
    // return <mark>Carregado!</mark>;
  // }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <article className={estilos.post} key={id}>
          <h3> {titulo} </h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;

