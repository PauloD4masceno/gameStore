import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import InfoGame from '../components/InfoGame';

import { getGame } from '../services/ProdutoService';

export default function Game(props) {
    const [game, setGame] = useState({});

  useEffect(() => {
    async function loadContent(){
    const game = await getGame(props.route.params.idGame);
    setGame(game);
    }
    loadContent();
  });
    return(
      <>
        <ScrollView style={styles.backgroud}>
        <InfoGame        
                {...props}
                idGame = {game.id}
                enderecoImagem={game.enderecoImagem}
                nomeproduto={game.nomeproduto}
                descricao = {game.descricao}
                tamanho={game.tamanho}
                desenvolvedor={game.desenvolvedor}
                preco={game.preco}
        />
        </ScrollView>
      </>
    )
}

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        backgroundColor: 'black',
      },   
});