import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Main from '../../components/Main';
import categoriesRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Main>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      {JSON.stringify(dadosIniciais)}
      <BannerMain
        videoTitle={dadosIniciais[0].videos[0].titulo}
        url={dadosIniciais[0].videos[0].url}
        videoDescription="Teste"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais[0]}
      />
      {/*
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      /> */}

    </Main>
  );
}

export default Home;
