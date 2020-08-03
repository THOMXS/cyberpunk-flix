import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, SetCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    })
  }
  function atualizaNome(infosDoEvento) {
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value);
      
    // const { getAttribute, value } = infosDoEvento.target;
    // setValor(
    //   getAttribute('name'),
    //   value
    // );
  }

  return (
    <PageDefault>
      <h1>Cadastro Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(infosDaCategoria) {
        infosDaCategoria.preventDefault();
        SetCategorias([
          ...categorias,
          valores
        ]);
      }}>
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={atualizaNome}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={atualizaNome}
        />
        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={atualizaNome}
        />
        
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )

        })}
      </ul>
      <Link to="/">
         Ir para home
       </Link>
    </PageDefault>
  )

} export default CadastroCategoria;


//   useEffect(() => {
//     if(window.location.href.includes('localhost')) {
//       const URL = 'http://localhost:8080/categorias'; 
//       fetch(URL)
//        .then(async (respostaDoServer) =>{
//         if(respostaDoServer.ok) {
//           const resposta = await respostaDoServer.json();
//           setCategorias(resposta);
//           return; 
//         }
//         throw new Error('Não foi possível pegar os dados');
//        })
//     }    
//   }, []);
