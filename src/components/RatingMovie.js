import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import PreferenceContext from '../context/PreferencesContexts'

const STAR_DARK = require('../../assets/starDark.png')
const STAR_LIGHT = require('../../assets/starLight.png')

const RatingMovie = (props) => {
  console.log(props)
  const { vote_average, vote_count } = props.movie;
  const media = vote_average / 2;

  return (
    <PreferenceContext.Consumer>
      {({theme}) => (
        <Rating style={styles.stars}
          type='custom'
          ratingImage= {theme === 'dark' ? STAR_DARK : STAR_LIGHT}
          ratingColor='#ffc205'
          ratingBackgroundColor='#080404'
          startingValue= {media}
          imageSize= {20}
        />
      )}
    </PreferenceContext.Consumer> 
  )
}

const styles = StyleSheet.create({
  stars : {
    alignContent: 'flex-start',
    justifyContent: 'flex-start'
  }
})

export default RatingMovie
