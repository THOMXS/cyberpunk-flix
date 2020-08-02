import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: rgba(0,0,0,0.9);
  background-image: url('/assets/img/Backgroud.jpg'); 
  color: var(--white);
  flex: 1;
  padding-top: 150px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children }) {
  return (
    <>
       <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;