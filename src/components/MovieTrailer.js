import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { Title, IconButton } from 'react-native-paper';

const MovieTrailer = (props) => {
    const {setShow} = props
    return (
      <View style={styles.play}>
        <IconButton
          icon='play'
          color='#000'
          size={30}
          style={styles.iconPlay}
          onPress={() => setShow(true)}
          >
        </IconButton>
      </View>
    )
}

const styles = StyleSheet.create({
    play: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    iconPlay:{
      backgroundColor: '#fff',
      marginTop: -40,
      marginRight: 30,
      width: 60,
      height: 60,
      borderRadius: 100,
    },
  })

export default MovieTrailer
