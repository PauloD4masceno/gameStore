import axios from 'axios';

var getProdutos = async () => {
  const response = await axios.get('http://192.168.0.11:3030/produtos');
  return response.data;
}

var getGame = async (id) => {
  const response = await axios.get('http://192.168.0.11:3030/produtos/' + id);
  return response.data;
}

var getComentario = async (idJogo) => {
  const response = await axios.get('http://192.168.0.11:3030/produtos/' + idJogo + '/comentarios');
  return response.data;
}

export { getProdutos, getGame, getComentario };