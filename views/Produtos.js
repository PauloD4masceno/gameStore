import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Produto from '../components/Produto';

import { getProdutos } from '../services/ProdutoService';

export default function Produtos(props) {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function loadContent(){
    const produtos = await getProdutos();
    setProdutos(produtos);
    }
    loadContent();
  });

  function desenhaProduto({ item }) {
    return <Produto
      {...props}
      id={item.id}
      enderecoImagem={item.enderecoImagem}
      nomeproduto={item.nomeproduto}
      tamanho={item.tamanho}
      desenvolvedor={item.desenvolvedor}
      preco={item.preco} />;
  }

  return (
    <View style={styles.container}>
        <FlatList
          data={produtos}
          renderItem={desenhaProduto}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
