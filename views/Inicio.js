import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React, {useState, useEffect} from 'react';
import control from '../assets/games.png'
import start from '../assets/start.jpg'
export default function Inicio(props) {

  return (
    <View style={styles.containerprodutos}>
        <Text style={styles.iniciotexto}> GameStore </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Games')}>
        <Image style={styles.imginicial} source={ start }></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Games')}>
        <Image style={styles.imginicial} source={ control }></Image>
        </TouchableOpacity>
        <Text style={styles.textoinicio}> Pressione o play </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    containerprodutos: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    
      },
      imginicial: {
        height: 200,
        width: 200,
      },
      iniciotexto:{
        color: 'white',
        fontSize: 30,
        marginBottom: 20,
      },
      textoinicio:{
        color: 'white',
        fontSize: 10,
      },
});


