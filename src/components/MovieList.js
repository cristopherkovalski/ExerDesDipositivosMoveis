import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const API_KEY = '151868b29bd99d76ddbc50defd266121';
const BASE_URL = 'https://api.themoviedb.org/3';
const TOP_RATED_MOVIES_URL = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
const SEARCH_MOVIES_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;

const MovieItem = ({ item }) => (
  <TouchableOpacity style={styles.movieItem} onPress={() => console.log(item.id)}>
    <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.poster} />
    <View style={styles.movieInfo}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.rating}>Rating: {item.vote_average}</Text>
      <TouchableOpacity onPress={() => console.log(`https://www.themoviedb.org/movie/${item.id}`)}>
        <Text style={styles.link}>Ver no TMDb</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(TOP_RATED_MOVIES_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    fetch(SEARCH_MOVIES_URL + query)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar filmes"
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  movieItem: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  poster: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  movieInfo: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    marginBottom: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});