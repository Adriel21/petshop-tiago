# React: Projeto PetShop

Projeto iniciado através do [CRA - Create React App](https://github.com/facebook/create-react-app).

Obs.: este projeto poderia ser criado também a partir do Vite.

## Execução do app

Na 1ª vez, é necessário `npm install` para gerar node_modules (com dependências etc).
E para executar, sempre use `npm start` e acesse `localhost:3000`.

## Dica: desabilitar o Compact Folders do VSCode em Configurações/Settings.

## Sobre Módulos CSS

O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.

Arquivos de módulo devem ser nomeados como `Componente.module.css`.

A importação de módulos CSS deve ser feita com `import nome from "caminho-do-modulo"`.

## Sobre Media Query

### Mobile First:

Telas a partir de X tamanho (min-width)

### Desktop First:

Telas de até o tamanho X (max-width)

---

## Uso de rotas com a lib react-router-dom (versão 5)

### Instalação

`npm install react-router-dom@5`

### App.jsx

1. Realizar a importação dos recursos da lib:
   `import { BrowserRouter, Route, Switch } from "react-router-dom";`

2. Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**

3. Cada componente que funciona como "página ou tela" deve estar dentro de um `<Route>`.

4. Os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca entre componentes ao navegar.

**Obs.:** não coloque nada além de `<Route>` no `<Switch>`

#### Sintaxe alternativa para aplicar rotas:

`<Route exact path="/" component={Home}>`

`<Route path="/produtos" component={Produtos}>`

`<Route path="/sobre" component={Sobre}>`

`<Route path="/contato" component={Contato}>`

### Menu.jsx

1. Importar o NavLink:
   `import { NavLink } from "react-router-dom";`

2. Substituir a tag `<a>` pelo `<NavLink>` e o atributo `href` por `to`

### Criação de um componente de interface chamado Caixa

Em vez de usar uma `div` em cada página agrupando conteúdos diferentes, isolamos ela num componente genérico (**Caixa**), aplicamos o CSS uma única vez usando módulo do componente, e programos através de `props` o carregamento dinâmico do conteúdo (**children**) e de classes adicionais (**listaDeClasses**).

**Dica:** você pode usar **destructuring** de objetos nas `props`!

---

## Usando uma api fake para simular processos de consumo de dados dinâmicos

### Instalação global do pacote JSON-SERVER (basta instalar 1x)

`npm install -g json-server`

Obs.: se tiver problemas ao executar, utilize o **Node.js command prompt**

### Utilização de um arquivo.json para simular a base de dados da API

É necessário criar um **arquivo.json** em qualquer pasta em sua máquina (no nosso caso, usamos a própria pasta raíz do petshop.). Este arquivo deve ser composto por um grande objeto contendo arrays com outros objetos.

### Execução do servidor da API

1. Usando de preferência o **Node.js command prompt**, acesse a pasta onde está o **nome-do-arquivo.json**
2. Execute o comando `json-server --watch nome-do-arquivo.json --port 2112`

Obs.: o número da porta deve ser diferente de 3000 (que é padrão no json-server) pois esta porta já estará sendo usada pelo app **React**.

Dica: no **package.json** do seu app adicione em `scripts` uma nova propriedade chamada `api` valendo `json-server --watch nome-do-arquivo.json --port 2112`. Desta forma, você poderá executar o server da API digitando simplesmente `npm run api`.

Após a execução da API, cada array de objetos contido no **arquivo.json** se torna um `endpoint` da API, acessível através da URL _localhost:porta/nome-do-endpoint_.

Exemplos:

`http://localhost:2112/categorias`

`http://localhost:2112/posts`

`http://localhost:2112/contatos`

---

## React Hooks

Introduzidos na versão React 16.8, são funções que permitem manipular estados e outros recursos do React sem a necessidade de programar Classes. **Hooks** são funções que se conectam aos estados do React e aos recursos do ciclo de vida dos componentes da função. _Não funcionam dentro de classes_.

Mais informações: <https://www.javatpoint.com/react-hooks>

### useState

Função que retorna uma variável com o valor do estado (state) e uma função que permite atualizar o valor desta variável. Podemos ter vários useState em nossos componentes para gerenciar estados e dados diferentes.

### useEffect

Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.

Recebe dois parâmetros:

- 1º: função callback com o que será executado
- 2º: lista (array) de dependências que indicarão ao `useEffect` quando ele deverá funcionar

Se não passar a lista (ou seja, se deixar sem []), `useEffect` executará toda vez que o componente for renderizado. Portanto, o callback se torna um loop infinito.

Se passar a lista vazia (ou seja, deixar o [] vazio), `useEffect` executará somente no momento que o componente é renderizado pela primeira vez, evitando o loop infinito do callback.

---

## CSS: uso da pseudo-classe :has()

Referências:

`https://edrodrigues.com.br/blog/where-is-has-novos-seletores-css-que-facilitam-sua-vida/`

`https://www.youtube.com/watch?v=Ia_4XdisCGQ`

`https://css-tricks.com/the-css-has-selector/`

`https://webkit.org/blog/13096/css-has-pseudo-class/`

---

## MUI: Biblioteca de componentes para React

Site oficial: https://mui.com/pt/material-ui/getting-started/installation/

Instalação: `npm install @mui/material @emotion/react @emotion/styled`

_Dica CSS:_ https://code.tutsplus.com/pt/tutorials/the-30-css-selectors-you-must-memorize--net-16048

---

## Para usar o app PetShop e a API via rede local

### package.json

Altere a linha: `"api": "json-server --watch db.json --port 2112"`
Para: `"api": "json-server --host NUMERO.IP.DA.SUA.MAQUINA db.json --port 2112"`

Exemplo: `"api": "json-server --host 10.20.45.44 db.json --port 2112"`

### servidor.api.js

Duplique e comente a linha da constante atual (serverApi).

Na versão descomentada, substitua o `localhost` pelo `número.ip.da.sua.maquina`.

Pare a API no terminal e execute novamente `npm run api`.

### Testando o app via celular

1. Abra o Chrome (ou Safari no iOS) em seu celular
2. Digite o número IP da sua máquina seguido de : e o número da porta usada pelo app React

---

## Tornando o app React em uma aplicação instalável no dispositivo (PWA)

### Referências sobre PWA

#### Aplicações Web Progressivas

`https://web.dev/progressive-web-apps/`

#### Web App Manifest File - Torne seu aplicativo da Web instalável

`https://medium.com/@marcelohg/web-app-manifest-file-torne-seu-aplicativo-da-web-instal%C3%A1ve-4bf5d1dcbe7d`

#### PWA Tips and tricks

`https://robferguson.org/blog/2018/09/14/pwa-tips-and-tricks/`

### Configurar arquivo manifest.json

Um **arquivo de manifesto** é um arquivo JSON contendo informações sobre seu aplicativo web e, quando combinado com um **Service Worker**, permite a instalação do aplicativo em qualquer dispositivo compatível.

### Configurar/Programar um Service Worker JavaScript

Um **Service Worker** (Trabalhador/Manipulador de Serviços) é um script que o navegador executa em segundo plano separado da aplicação web, possibilitando recursos que não precisam de uma página ou interações com o usuário.

O Service Worker está no centro de muitos recursos das chamadas **PWAs (Progressive Web Applications)**, tais como: cache offline, sincronização em segundo plano, notificações, execução independente do navegador mobile etc.

### Passo a passo para transformação do app PetShop em PWA

1. Configuração do manifest.json
2. Criação dos arquivos sw-petshop.js e sw-registro.js
3. Adicionar ao final da index.html os scripts sw-petshop.js (1º) e sw-registro.js (2º)
4. Voltar no Chrome do computador, com o app ainda aberto, notar na barra de endereços o novo ícone de instalação
5. Clique nele e instale seu App.
6. Feche as janelas do navegador
7. Procure em sua área de trabalho (ou menu Iniciar) o ícone do app PetShop
8. No Android acesse o menu do Chrome e procure por **Adicionar à tela inicial**
9. No iOS acesse o menu do Safaria e procure por **Adicionar à tela de início**