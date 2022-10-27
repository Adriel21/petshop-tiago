import { useState, useEffect } from "react"; // Hooks do React
import { useHistory, useParams } from 'react-router-dom';

import serverApi from "../../api/serverApi";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
import LoadingDesenho from "../Loading/LoadingDesenho";
import estilos from "./ListaPosts.module.css";
const ListaPosts = ({url}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(props.url);
  useEffect(() => {
    async function getPosts() {
      try {
        // const resposta = await fetch(`${serverApi}/posts`);
        // Minha solução
        const resposta = await fetch(`${serverApi}/${url !== undefined ? url : "posts"}`);
        
        // Solução do Gui
        // const resposta = await fetch(`${serverApi}/${props.url || "posts"}`);

        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, [url]); /* É necessário indicar a URL como dependência pois ela muda toda vez que uma categoria é clicada*/
  // Desta forma, o userEffect "entende" que ele deve executar novamente as suas ações (neste caso, executar novamente o fetch na API)

  if (loading) {
    return <LoadingDesenho carrega={'Posts'}/>;
  }

  // console.log(posts.nome[2])

  if(posts.length !== 0) {
    return (
      <div className={estilos.lista_posts} >
        {posts.map(({ id, titulo, subtitulo }) => (
          <ArtigoPost
            key={id}
            id={id}
            titulo={titulo}
            subtitulo={subtitulo}
            classe={estilos.post}
          />
        ))}
      </div>
    );
  } else {
    return(
      <h2>Não há posts!</h2>
    )
  }



};

export default ListaPosts;