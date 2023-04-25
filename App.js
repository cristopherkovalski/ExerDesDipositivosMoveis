import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import DocList from './src/components/DocList';
import Main from './src/components/Main';
import Title from './src/components/title';
import CalculoMedia from './src/components/Main';
import FibonacciDisplay from './src/components/FibonacciDisplay';
import ImageGallery from './src/components/ImageGallery';
import MovieList from './src/components/MovieList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="DocList" component={DocList} options={{ title: 'Documentação React' }} />
        <Stack.Screen name="CalculoMedia" component={CalculoMedia} options={{ title: 'Calculo de Média' }} />
        <Stack.Screen name="FibonacciDisplay" component={FibonacciDisplay}  options={{ title: 'Fibonacci' }}/>
        <Stack.Screen name="ImageGallery" component={ImageGallery} options={{ title: 'Galeria de Imagens' }} />
        <Stack.Screen name="MovieList" component={MovieList} options={{ title: 'Lista de Filmes' }} />
      </Stack.Navigator>
    </NavigationContainer>
     /*<View style={styles.container}>
      <Title/>
      <Main/>
      <StatusBar style="auto" />
    </View>*/

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
