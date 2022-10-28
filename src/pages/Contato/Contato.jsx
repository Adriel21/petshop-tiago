import { Button, TextField } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa id="contato">
        {/* Não é necessário inserir o action pois é autogerenciado pelo react */}
          <form action="" method="post" className={estilos.formulario}>
            <div>
              <TextField  required type="text" label="Nome Completo" variant="outlined" size="medium" fullWidth helperText="Você deve digitar um nome"/>

              </div>

              <div>
                <TextField 
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  required
                  helperText="Informe um email para contato"

                />
              </div>

              <div>
                <TextField type="text" required label="Mensagem" variant="outlined" helperText="Fale o que você quiser" fullWidth multiline rows="6" />
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
