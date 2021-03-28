import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function infoGame(props) {

  return (
    <View style={styles.containergame}>
      <Image style={styles.imggame} source={{uri: props.enderecoImagem}}></Image>
            <Text style={styles.containernomeproduto} > {props.nomeproduto} </Text>
            <Text style={styles.text1}> {props.descricao} </Text>
            <Text style={styles.text}> Tamanho: {props.tamanho} </Text>
            <Text style={styles.text}> Desenvolvedor: {props.desenvolvedor} </Text>
            <Text style={styles.text}> Preço: {props.preco} </Text>
              <View style={styles.comentarios}>
                  <Text style={styles.coments} onPress={() => props.navigation.navigate('Comentarios', 
                  {
                    idJogo: props.idGame,
                  })}> COMENTÁRIOS </Text>
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containergame: {
        marginTop: 10,
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        alignItems: 'center',
      },
     containernomeproduto: {
        fontSize: 30,
        color: 'white',
        textAlign:'center',
      },
      coments: {
        fontSize:30,
        color: 'black',
        textAlign:'center',
      },
      comentarios: {
        position: 'relative', 
        marginTop:20,
        alignContent:'center',
        width: '100%',
        backgroundColor:'green',
        fontSize:30,
        color: 'white',
      },
      text: {
        color: 'white',
        fontSize: 15,
        alignContent:'center',
      },
      text1: {
        color: 'white',
        fontSize: 15,
      },
      imggame: {
        height: 350,
        width: 350,
      },
});


