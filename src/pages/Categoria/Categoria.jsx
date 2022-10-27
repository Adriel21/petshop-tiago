import estilos from './Categoria.module.css';
import ListaCategorias from '../../components/ListaCategorias/ListaCategorias';
// Objetivo deste componente é exibir o ListaPosts filtrado pela categoria escolhida no menu ListaCategorias
const Categoria = () => {
  return (  
    <section>
        <h2 className={estilos.titulo_secao}>Pet Notícias</h2>
        <ListaCategorias />

    </section>
  )
}

export default Categoria