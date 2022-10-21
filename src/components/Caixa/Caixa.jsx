import estilos from "./Caixa.module.css";

// versão props desestruturada
const Caixa = ({children, listaDeClasses}) => {
  return (
    <div className={`${estilos.caixa} ${listaDeClasses || ""}`}>
      {/* Conteúdo é recebido de forma dinâmica de acordo com as classes passadas na props */}
      {children} 
    </div>
  );
};

export default Caixa;
