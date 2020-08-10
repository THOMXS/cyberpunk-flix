import config from '../config';

const URL_BACKEND_CATEGORIAS = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIA = `${URL_BACKEND_CATEGORIAS}?_embed=videos`;
function getAllWithVideos() {
  return fetch(URL_CATEGORIA)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
};
