import pacman from '../../assets/images/pacman-loading.svg';
import estilos from "./LoadingDesenho.module.css";


function LoadingDesenho({carrega}) {
  return (
    <div className={estilos.loading}>
        <h2>Carregando {carrega}</h2>
        <img src={pacman} alt="" />
    </div>
  )
}

export default LoadingDesenho;