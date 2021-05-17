import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Image,
  } from 'react-native';
import {map} from 'lodash';
import { Title } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {IMAGE_PATH} from '../utils/constants';

const RenderMoviesByGenre = (props) => {
    console.log("RenderMovies", props)
    const {data, navigationProp} = props;
    const {id, title, poster_path} = data.item;
    const imageURL = `${IMAGE_PATH}/w500${poster_path}`;
    console.log("image", imageURL)

    const onNavigation = () => {
        navigationProp.navigate('movie', {movieId: id})
    }

    return (
      <TouchableWithoutFeedback onPress={() => onNavigation()}>
        <View style={styles.card}>
          <Image style={styles.image} source={{uri : imageURL}}/>
          <Title style={styles.title} numberOfLines={1}>{title}</Title>
        </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 10
      },
      shadowOpacity: 1,
      shadowRadius: 10,
    },
    image:{
      width: '85%',
      height: 170,
      borderRadius: 20,  
    },
    title: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 13,
    }
})

export default RenderMoviesByGenre;