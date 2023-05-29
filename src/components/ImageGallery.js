import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://pixabay.com/api/?key=35480957-2bc054552db0f0a8996e5c71e&q=nature&image_type=photo&per_page=10')
      .then(response => response.json())
      .then(data => setImages(data.hits))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.webformatURL }} style={{ height: item.webformatHeight, width: item.webformatWidth }} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});