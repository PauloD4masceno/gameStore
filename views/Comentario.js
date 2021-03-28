import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Coments from '../components/Coments';

import { getComentario } from '../services/ProdutoService';

export default function Comentario(props) {
    const [comentario, setComentario] = useState({});

  useEffect(() => {
    async function loadContent(){
    const comentario = await getComentario(props.route.params.idJogo);
    setComentario(comentario);
    }
    loadContent();
  });
  function desenhaComent({ item }) {
    return <Coments
      {...props}
      id = {item.id}
      idJogo = {item.idJogo}
      foto={item.foto}
      nome={item.nome}
      comentario={item.comentario}
      estrelas={item.estrelas}
      />
  }
  return (
    <View style={styles.backgroud}>
        <FlatList
          data={comentario}
          renderItem={desenhaComent}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
      },   
});