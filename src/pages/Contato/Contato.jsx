import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  // Eventos/funções  para captura da digitação dos campos
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value) remove.;
1
  // Hook useState para manipu
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");


  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa id="contato">
        {/* Não é necessário inserir o action pois é autogerenciado pelo react */}
          <form action="" method="post" className={estilos.formulario}>
            <div>
              {/* Propriedades para eventos sempre começam com On */}
              {/* Sempre coloque a função sem parêntese para que ela só seja executada quando for chamada */}
              <TextField  onChange={inputNome} required type="text" label="Nome Completo" variant="outlined" size="medium" fullWidth helperText="Você deve digitar um nome"/>

              </div>

              <div>
                <TextField 
                onChange={inputEmail}
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  required
                  helperText="Informe um email para contato"

                />
              </div>

              <div>
                <TextField onChange={inputMensagem} type="text" required label="Mensagem" variant="outlined" helperText="Fale o que você quiser" fullWidth multiline rows="6" />
              </div>

              <div>
                <Button type="submit" variant="contained">Enviar</Button>
               </div>
          </form>
      </Caixa>
    </section>
  );
};

export default Contato;
