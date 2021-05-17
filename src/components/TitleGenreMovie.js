import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import {map, size} from 'lodash';

const TitleGenreMovie = (props) => {
    const {movie} = props;
    return (
      <View>
        <Title>Title: {movie.title}</Title>
        <Text style={styles.genreName}>
          Genres: 
          {map(movie.genres, (genre, index) => (
          <Text 
            key={genre.id}
            style={styles.genre}>
            {index === 0 ? ' ' : ''}
            {genre.name}
            {index !== size(movie.genres) - 1 ? ', ' : ''}
          </Text>
            ))}
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    genreName: {
      marginRight: 16,
      fontSize: 12,
      color: '#8997a5',
    },
    genre: {
      fontSize: 12,
      color: '#8997a5',
      marginLeft: 20,
    }
  })

export default TitleGenreMovie
