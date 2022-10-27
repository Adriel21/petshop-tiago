import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import estilo from './Post.module.css';
import serverApi from "../../api/serverApi";
import Caixa from "../../components/Caixa/Caixa";
import LoadingDesenho from '../../components/Loading/LoadingDesenho';

const Post = () => {

   
    // Hook que permite acessar e manipular parâmetros Url´s
    // useParams () => hook do react-router que permite acesso/Manipulação de parâmetros vindos da url
    // useParams retorna um objeto enquanto o useState retorna um array
    const { id } = useParams();
    // console.log(id);
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    // hook do react-router que permite utilizar recursos de navegação no histórico do navegador
    let history = useHistory();

    useEffect(()=> {
        async function getPost(){
            try {
                const resposta = await fetch(`${serverApi}/posts/${id}`);
                const dados = await resposta.json();
                setPost(dados);
                setLoading(false);

                // Estamos verificando se o resultado do objeto de dados possui tamanho zero, ou seja, (se ele está vazio, sem dados nenhum)
                if(Object.keys(dados).length === 0){
                    // Estando vazio, forçamos o redirecionamento numa rota de primeiro nível que não existe. Com isso, na prática, o router traz o página404
                    history.push("/404");
                }
                // console.log(dados);
            } catch (error) {
                console.log("Deu ruim na busca do post: " + error.message);
            }
        }

        getPost();
    }, [id]); /* id é uma dependência para o useEffect*/

    
  // Uso de state imagem loading - uso de renderização condicional
  if (loading) {
    // return <mark style={{ backgroundColor: "red" }}>Carregando....</mark>;
    return <LoadingDesenho carrega={'Dados do Post'}/>
  } 
  

  return (
    
    <section>
                  <h2 className={estilo.titulo_secao}>{post.titulo}</h2>

                  <Caixa>
                      <h3>{post.categoria}</h3>
                      {/* <p>{post.categoria}</p> */}
                      <p>{post.descricao}</p>
                  </Caixa>
       
    </section>
  )
}
        


export default Post;
