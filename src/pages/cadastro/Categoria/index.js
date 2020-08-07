/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../components/Main';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }
  function atualizaNome(infosDoEvento) {
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('alo alo');
    const URL_DB = 'http://localhost:8080/categorias';
    fetch(URL_DB)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       "id": 1,
    //       "nome": "TESTE",
    //       "descricao": "Teste descrição",
    //       "cor": "#cbd1ff",
    //     },
    //     {
    //       "id": 2,
    //       "nome": "TESTE",
    //       "descricao": "Teste descrição",
    //       "cor": "#cbd1ff",
    //     },
    //   ]);
    // }, 3 * 1000);
  }, []);

  return (
    <Main>
      <h1>
        Cadastro Categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDaCategoria) {
        infosDaCategoria.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
      }}
      >
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
        <Button to='/'>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </Main>
  );
} export default CadastroCategoria;
