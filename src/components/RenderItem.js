import React, {useState, useEffect} from 'react';
import {IMAGE_PATH} from '../utils/constants';
import {getGenreMovie} from '../api/movies';
import {map, size} from 'lodash';
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import {Title, Text} from 'react-native-paper';

const RenderItem = (props) => {
  const {navigationProp} = props;
  const {data} = props;
  const {genres} = props;
  const {item} = data;
  const {title, poster_path, genre_ids} = item;
  const imageURL = `${IMAGE_PATH}/w500${poster_path}`;

  //   useEffect(() => {
  //     getGenreMovie(genre_ids).then((response) => {
  //       setGenres(response);
  //     });
  //   });

  console.log('tamaño', size(genres))
  return (
    <TouchableWithoutFeedback onPress={() => navigationProp.navigate('movie', {movieId: item.id})}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: imageURL}} />
        <Title style={styles.title}>{title}</Title>
        <View sytle={styles.genres}>
          {genres && genres.filter((x) => {
            return item.genre_ids.indexOf(x.id) > 0
          })
            .map((genre, index) => (
              <Text key={index} style={styles.genre}>
                {genre.name}
                {index !== size(genres) - 1 ? ', ' : ''}
              </Text>
            ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  genres: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  genre: {
    fontSize: 12,
    color: '#8997a5',
  },
});

export default RenderItem;
