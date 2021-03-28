import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Produto(props) {

  return (
    <View style={styles.containerprodutos}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Game', 
      {
        idGame: props.id,
      })}>
      <Image style={styles.imgproduto} source={{uri: props.enderecoImagem}}></Image>
      </TouchableOpacity>
          <View style={styles.containertexto}>
            <Text style={styles.titulo} onPress={() => props.navigation.navigate('Game', 
            {
              idGame: props.id,
            })}> {props.nomeproduto} </Text>
            <Text style={styles.text}> {props.tamanho} </Text>
            <Text style={styles.text}> {props.desenvolvedor} </Text>
            <Text style={styles.text}> {props.preco} </Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerprodutos: {
        borderBottomWidth:1,
        borderColor: 'green',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        flexDirection: 'row',
        marginBottom: 10,
    
      },
     containertexto: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'column',
      },
      titulo: {
        marginLeft: 10,
        color: 'white',
        fontSize: 15,
      },
      text: {
        color: 'white',
        marginLeft: 10,
        fontSize: 10,
      },
      imgproduto: {
        height: 80,
        width: 80,
      },
});


