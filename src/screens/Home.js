import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Title} from 'react-native-paper';
import {map} from 'lodash';
import {getNewsMoviesApi, getGenresMovies, getMoviesByGenreApi} from '../api/movies';
import CarouselVertical from '../components/CarouselVertical';
import RenderMoviesByGenre from '../components/RenderMoviesByGenre';
import CarouselMulti from '../components/CarouselMulti';

const Home = (props) => {
  const {navigation} = props;
  const [newMovies, setNewMovies] = useState();
  const [genres, setGenres] = useState();
  const [activeGenre, setActiveGenre] = useState('');
  const [moviesByGenre, setMoviesByGenre] = useState();

  useEffect(() => {
    getNewsMoviesApi().then((response) => {
      setNewMovies(response.results);
    });
    getGenresMovies().then((response) => {
      setGenres(response.genres);
      console.log('GENRES', response.genres);
    });
  }, []);

  useEffect(() => {
    getMoviesByGenreApi(activeGenre).then((response) => {
      setMoviesByGenre(response.results)
      console.log('MoviesByGenre', response.results)
    })
  }, [activeGenre])

  const markActiveGenre = (genreId) => {
    setActiveGenre(genreId)
  }
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {newMovies && (
        <View style={styles.news}>
          <Title style={styles.newsTitle}>News Movies</Title>
        </View>
      )}
      {newMovies && <CarouselVertical data={newMovies} genres={genres} navigationProp={navigation}/>}

      <View style={styles.genreListView}>
        <Title>Movies By Genre:</Title>
        <ScrollView horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.genreList}>
          {map(genres, (genre) => (
            <Text 
              key={genre.id}
              style={[styles.genreName, {color:  activeGenre !== genre.id ? '#8697a5' : '#fff'}]} 
              onPress={() => markActiveGenre(genre.id)}>
                {genre.name}
            </Text>
          ))}
        </ScrollView>
        {genres && (
          <CarouselMulti data={moviesByGenre} navigationProp={navigation}/>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  news: {
    marginVertical: 10,
  },
  newsTitle: {
    marginBottom: 15,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
  genreListView: {
    paddingHorizontal: 20,
  },
  genreList: {
    marginBottom: 20,
    marginTop: 5,
    padding: 10,
    paddingHorizontal: 20,
  },
  genreName: {
    marginRight: 16,
    fontSize: 16,
  },
});

export default Home;
