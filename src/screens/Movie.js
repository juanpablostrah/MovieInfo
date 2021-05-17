import React, {useState, useEffect, Fragment} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {getMovieApi} from '../api/movies';
import {IMAGE_PATH} from '../utils/constants';
import { Title, IconButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import ModalVideos from '../components/ModalVideos';
import { set } from 'react-native-reanimated';
import TitleGenreMovie from '../components/TitleGenreMovie';
import MovieTrailer from '../components/MovieTrailer';
import RatingMovie from '../components/RatingMovie';

const Movie = (props) => {
  const {movieId} = props.route.params;
  const [movie, setMovie] = useState()
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    getMovieApi(movieId).then((response) => {
      setMovie(response)
    });
  }, []);

  if(!movie) return null

  console.log('Peli', movie)
  return (
    <>
      <ScrollView>
        <View style={styles.viewPoster}>
          <Image style={styles.image} source={{uri: `${IMAGE_PATH}/w500${movie.poster_path}`}} />
        </View>
        <MovieTrailer setShow={setShow}/>
        <TitleGenreMovie movie={movie}></TitleGenreMovie>
        <RatingMovie movie={movie}></RatingMovie>
        <Text style={styles.genreName}>
          Average Points: {movie.vote_average}
        </Text>
      </ScrollView>
      <ModalVideos show={show} setShow={setShow} idMovie={movie.id}></ModalVideos>
    </>
  );
};

const styles = StyleSheet.create({
  viewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    textShadowRadius: 10
  },
  image:{
    width: '100%',
    height: 500,
    borderRadius: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30 
  },
})

export default Movie;
