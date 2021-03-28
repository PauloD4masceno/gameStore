import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Coments(props) {

  return (
    <View style={styles.containercoments}>
      <Image style={styles.foto} source={{uri: props.foto}}></Image>
          <View style={styles.containertexto1}>
            <Text style={styles.nome}>Nome: {props.nome} </Text>
            <Text style={styles.coment}>{props.comentario} </Text>
            <Text style={styles.estrela}> Estrelas: {props.estrelas} </Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containercoments: {
        borderBottomWidth:1,
        borderColor: '#808080',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        flexDirection: 'row',
        marginBottom: 10,
    
      },
     containertexto1: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'column',
      },
      nome: {
        marginBottom:10,
        marginLeft: 10,
        borderBottomWidth:1,
        borderColor: '#808080',
        color: 'white',
        fontSize: 20,
      },
      coment: {
        color: 'white',
        marginBottom:10,
        marginLeft: 10,
        borderBottomWidth:1,
        borderColor: '#808080',
        fontSize: 15,
      },
      estrela: {
        color: 'white',
        marginLeft: 10,
        fontSize: 15,
        marginBottom:10,
        marginLeft: 10,
        borderBottomWidth:1,
        borderColor: '#808080',
      },
      foto: {
        height: 80,
        width: 80,
      },
});


