import { Button, TextField } from "@mui/material";
import { useState } from "react";
import serverApi from "../../api/serverApi";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  // Eventos/funções  para captura da digitação dos campos
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  // Hook useState para manipu
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarContato = async (event) => {
    event.preventDefault();
    // console.log(nome, email, mensagem)

    const opcoes = {
      method: "POST",
      body: JSON.stringify({nome, email, mensagem}),
      headers: {
        // Configurando cabeçalhos para requisições
        "Content-type" : "application/json; charset=utf-8",
      },
    };
    // Script para envio dos dados para a API
    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados Enviados")
    } catch (error) {
      console.log("Deu ruim" . error.message)
    }
  }

  // 'Toggle' do botao: caso qualquer uma das variáveis seja undefined, desabilitado se manterá true e com isso o botão ficará desabilitado

  // Quando deixarem de ser undefined, desabiltiado se tornará false e com isso o botão será habilitado
  let desabilitado = !nome || !email || !mensagem;
  // let desabilitado = nome === "" || email === "" || mensagem === "";


  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa id="contato">
        {/* Não é necessário inserir o action pois é autogerenciado pelo react */}
          <form action="" method="post" className={estilos.formulario}  onSubmit={enviarContato}>
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
                <Button disabled={desabilitado} type="submit" variant="contained">Enviar</Button>
               </div>
          </form>
      </Caixa>
    </section>
  );
};

export default Contato;
