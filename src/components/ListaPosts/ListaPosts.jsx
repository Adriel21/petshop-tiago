import { useState, useEffect } from "react"; // Funções que começam com use são chamadas de Hooks do React

import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/serverApi";

const ListaPosts = () => {
    // Iniciamos o state do componente com um array vazio, para posteriormente "preenchê-lo" com os dados vindos da API. Esta atribuição será feita com o auxílio do setPosts.
  const [posts, setPosts] = useState([]); 



//   useEffect é utilizado para controlar erros gerados
// Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.

// Recebe dos parâmetros
// 1 funcão callback com o que será executado
// 2 lista de dependências que indicarão ao useEffect quando ele deverá funcionar

// - Se não possuir a lista (ou seja, se deixar sem[]), useEffect executará toda vez que o componente for renderizado. Portanto, o callback se torna um loop infinito

// Se passar a lista vazia (Ou seja, deixar o [] vazia), useEffect executará apenas uma vez, porque não há dependências a serem monitoradas pelo useEffect
  useEffect( () => {

     async function getPosts () { 
        try {
            const resposta = await fetch(`${serverApi}/posts`);
            const dados = await resposta.json();
            setPosts(dados);
        } catch (error) {   
            console.log("deu ruim" + error.message);
        }
    }

    getPosts();


}, []);
  
   const postsTemp = [];
    console.log(serverApi);


  return (
  
      <div className={estilos.lista_posts}>
        {posts.map(({id, titulo, subtitulo}) => (
          <article className={estilos.post} key={id}>
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
          </article>
        ))}
      </div>

    )
    
    
      // return `${element.firstName} ${element.lastName}`;
  }

    // <div className={estilos.lista_posts}>
    //   <article className={estilos.post}>
    //     <h3>Título do post...</h3>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //       dolorem facere quam mollitia eligendi dolor?
    //     </p>
    //   </article>
    //   <article className={estilos.post}>
    //     <h3>Título do post...</h3>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //       dolorem facere quam mollitia eligendi dolor?
    //     </p>
    //   </article>
    //   <article className={estilos.post}>
    //     <h3>Título do post...</h3>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //       dolorem facere quam mollitia eligendi dolor?
    //     </p>
    //   </article>
    //   <article className={estilos.post}>
    //     <h3>Título do post...</h3>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //       dolorem facere quam mollitia eligendi dolor?
    //     </p>
    //   </article>

      
  

export default ListaPosts;
