import pacman from '../../assets/images/pacman-loading.svg';
import estilos from "./LoadingDesenho.module.css";


function LoadingDesenho() {
  return (
    <div className={estilos.loading}>
        <h2>Carregando...</h2>
        <img src={pacman} />
    </div>
  )
}

export default LoadingDesenho;