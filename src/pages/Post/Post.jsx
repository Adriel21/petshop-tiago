import estilo from './Post.module.css';
import serverApi from "../../api/serverApi";
import Caixa from "../../components/Caixa/Caixa";

const Post = () => {
  return (
    <section>
        <h2 className={estilo.titulo_secao}>Título do post...</h2>

        <Caixa>
            <h3>Categoria do post...</h3>
            <p>Descrição do Post...</p>
        </Caixa>
    </section>
  )
}

export default Post;
