import { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import estilo from './ListaCategorias.module.css';
import serverApi from '../../api/serverApi';
import LoadingDesenho from '../Loading/LoadingDesenho';
import { Link } from 'react-router-dom';

const ListaCategorias = () => {

    // const { id } = useParams();

    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

     // hook do react-router que permite utilizar recursos de navegação no histórico do navegador
    //  let history = useHistory();


    useEffect(() => {
        async function getCategorias() {
          try {
            // o await aguarda o término do processamento do fetch e, apenas depois que for processado, ele atribui para a constante
            const resposta = await fetch(`${serverApi}/categorias/`);
            const dados = await resposta.json();
            setCategorias(dados);
            setLoading(false);
          } catch (error) {
            console.log("Deu ruim! " + error.message);
          }
        }
        getCategorias();
      }, []);


      if (loading) {
        return <LoadingDesenho />;
      }

      console.log(categorias);



  return (
    <div className={estilo.lista_categorias}>
        <ul>
            {/* Forma desestruturada, se não estivesse desestruturada seria com map((categiruas)) e para acessar seria categorias.nome */}
            {categorias.map(({id, nome}) => (
                <li key={id} >
                    <Link  to={`/categoria/${nome}`}>{nome}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListaCategorias;
