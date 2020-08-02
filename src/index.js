import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import CadastroVideo from './pages/cadastro/Video/index.js';
import CadastroCategoria from './pages/cadastro/Categoria';
import Pagina404 from './pages/404/';
import './index.css';
// const Pagina404 =() => (<div>Página 404</div>)


// const Pagina404 = () => (
//   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
//     <h1>Ops, quebrou tudo :O</h1>
//     <p>
//       <a href="/">Você pode jogar ou voltar pra home :)</a>
//     </p>
//     <p>
//       Ou <a href="https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej">aprender a fazer o jogo</a>
//     </p>
//     {/*
//       Pessoal, quem quiser fazer o desafio do Flappy Bird, da pra usar esse iframe aqui: 
//       - https://codepen.io/omariosouto/pen/pogmdGE

//       E quem quiser programar o jogo:
//       - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
//     */}
//     <iframe
//       title="Flappy Bird Game"
//       src="https://mariosouto.com/flappy-bird-devsoutinho/"
//       width="340"
//       height="600" />
//   </div>
// )

ReactDOM.render( //toda a aplicação é chamada aqui -> SPA
 //BrowserRouter é um compentente raiz do react-router-dow
 //Switch se refere as páginas
 <BrowserRouter> 
    <Switch>
      {/* <Route path="/" component={App} /> */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
      {/* <Route component={() => (<div>Página 404</div>)} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);