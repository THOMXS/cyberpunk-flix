import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../components/Main';

function CadastroVideo() {
  return (
    <Main>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </Main>
  )
}

export default CadastroVideo; 