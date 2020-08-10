import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../components/Main';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [categorias, setCategorias] = useState([]);
  const { handleChange, valores, clearForm } = useForm(valoresIniciais);
  const URL_DB = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'http://cyberpunk-flix.herokuapp.com/categorias';

  function updateServer() {
    fetch(URL_DB)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }

  function handleSubmit(infosDaCategoria) {
    infosDaCategoria.preventDefault();
    setCategorias([
      ...categorias,
      valores,
    ]);

    clearForm();
  }

  useEffect(() => {
    updateServer();
  }, []);

  return (
    <Main>
      <h1>
        Cadastro Categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />
        <Button>
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
