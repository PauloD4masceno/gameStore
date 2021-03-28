import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Produtos from './views/Produtos'
import Game from './views/Game'
import Comentario from './views/Comentario.js'
import Inicio from './views/Inicio.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content"/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Games" component={Produtos}/>
        <Stack.Screen name="Game" component={Game}/>
        <Stack.Screen name="Comentarios" component={Comentario}/>
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}