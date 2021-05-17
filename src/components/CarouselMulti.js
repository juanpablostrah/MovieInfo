import React from 'react';
import {
    View,
    Dimensions,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import RenderMoviesByGenre from './RenderMoviesByGenre';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.3);

const CarouselMulti = (props) => {
  console.log("CarouMulti", props);
  const {data} = props;
  const {navigationProp} = props;

  return (
    <Carousel
      layout="default"
      data={data}
      renderItem={(item) => <RenderMoviesByGenre data={item} navigationProp={navigationProp}/>}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
      firstItem={1}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
    />
  );
}

export default CarouselMulti

