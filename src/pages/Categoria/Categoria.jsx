import { useParams } from 'react-router-dom';
import estilos from './Categoria.module.css';
import ListaCategorias from '../../components/ListaCategorias/ListaCategorias';
import ListaPosts from '../../components/ListaPosts/ListaPosts';
// Objetivo deste componente é exibir o ListaPosts filtrado pela categoria escolhida no menu ListaCategorias
const Categoria = () => {
    const {nome} = useParams();
    // console.log(nome);
  return (  
    <section>
        <h2 className={estilos.titulo_secao}>Categorias</h2>
        <ListaCategorias/>

        {/* Ponto de interrogação para concatenar o parâmetro0 */}
        <ListaPosts  url={`posts?categoria=${nome}`}/>
    
    </section>
  )
}

export default Categoria