import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import {Title, Text} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {IMAGE_PATH} from '../utils/constants';
import {getGenreMovie} from '../api/movies';
import {map, size} from 'lodash';
import RenderItem from './RenderItem';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

const CarouselVertical = (props) => {
  const {data} = props;
  const {genres} = props;
  const {navigationProp} = props;

  return (
    <Carousel
      layout="default"
      data={data}
      renderItem={(item) => <RenderItem data={item} genres={genres} navigationProp={navigationProp}/>}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
    />
  );
};

export default CarouselVertical;
