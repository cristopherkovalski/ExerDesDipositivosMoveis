import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import DocItem from './DocItem';

const DocList = () => {
  const data = [
    {
      id: '1',
      title: 'Documentação do React Native',
      url: 'https://reactnative.dev/docs/getting-started',
    },
    {
      id: '2',
      title: 'Componentes do React Native',
      url: 'https://reactnative.dev/docs/components-and-apis',
    },
    {
      id: '3',
      title: 'Estilo no React Native',
      url: 'https://reactnative.dev/docs/style',
    },
    {
      id: '4',
      title: 'Layout no React Native',
      url: 'https://reactnative.dev/docs/flexbox',
    },
    {
      id: '5',
      title: 'Navigation no React Native',
      url: 'https://reactnavigation.org/docs/getting-started',
    },
  ];

  const renderItem = ({ item }) => <DocItem item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default DocList;