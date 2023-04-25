import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-web';

export default function HomeScreen({navigation}) {
    return(
        <View style={{ flex:1, alignItems: 'center' , justifyContent: 'center' }}>
          <Text> Home Screen </Text> 
           <Button title="Ir para a Documentação" onPress={ () => navigation.navigate('DocList')} />
           <Button title="Ir para a Calculadora de Média" onPress={ () => navigation.navigate('CalculoMedia')} /> 
           <Button title="Ir para Fibonacci" onPress={ () => navigation.navigate('FibonacciDisplay')} /> 
           <Button title="Ir para Galeria de Imagens" onPress={ () => navigation.navigate('ImageGallery')} />
           <Button title="Ir para Lista de Filmes" onPress={ () => navigation.navigate('MovieList')} />
          </View>
    );
}

