import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/serverApi";

const ListaPosts = () => {
  

    const getPosts = async () => {
        try {
            const resposta = await fetch(`${serverApi}/posts`);
            const dados = await resposta.json();
            console.log(dados);
        } catch (error) {   
            console.log("deu ruim" + error.message);
        }
    }
  
   const postsTemp = [];
    console.log(serverApi);

    getPosts();
    

  return (
  
      <div className={estilos.lista_posts}>
        {postsTemp.map(({id, titulo, subtitulo}) => (
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
