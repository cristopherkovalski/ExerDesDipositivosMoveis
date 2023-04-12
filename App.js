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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DocList" component={DocList} />
        <Stack.Screen name="CalculoMedia" component={CalculoMedia}/>
        <Stack.Screen name="FibonacciDisplay" component={FibonacciDisplay}/>
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
