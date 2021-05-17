import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const Search = () => {
  const [inputSearch, setInputSearch] = useState('');
  const searchMovies = (text) => {
    return console.log('buscando pelis');
  };

  return (
    <View>
      <TextInput
        label="Movie"
        placeholder="type movie title..."
        value={inputSearch}
        onChangeText={(text) => searchMovies(text)}
      />
      <Text>Search</Text>
    </View>
  );
};

export default Search;
