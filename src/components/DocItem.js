import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const DocItem = ({ item }) => {
  const handlePress = () => {
    Linking.openURL(item.url);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077cc',
  },
});

export default DocItem;