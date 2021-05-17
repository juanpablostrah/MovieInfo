import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Drawer,
  Switch,
  TouchableRipple,
  Text,
  Button,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import PreferenceContext from '../context/PreferencesContexts';

const DrawerContent = (props) => {
  const {navigation} = props;
  //const {theme, toggleTheme} = usePreference();
  const [activeScreen, setActiveScreen] = useState('home');

  const onChangeScreen = (screen) => {
    navigation.navigate(screen);
    setActiveScreen(screen);
  };
  return (
    <PreferenceContext.Consumer>
      {({theme, toggleTheme}) => (
        <DrawerContentScrollView>
          <Drawer.Section>
            <Drawer.Item
              label="Home"
              active={activeScreen === 'home'}
              onPress={() => onChangeScreen('home')}
            />
            <Drawer.Item
              label="Popular Movies"
              active={activeScreen === 'popular'}
              onPress={() => onChangeScreen('popular')}
            />
            <Drawer.Item
              label="Search Movies"
              active={activeScreen === 'search'}
              onPress={() => onChangeScreen('search')}
            />
            <Drawer.Item
              label="News Movies"
              active={activeScreen === 'news'}
              onPress={() => onChangeScreen('news')}
            />
          </Drawer.Section>
          <Drawer.Section title="Options">
            <TouchableRipple>
              <View style={styles.preference}>
                <Text>Dark theme</Text>
                <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </DrawerContentScrollView>
      )}
    </PreferenceContext.Consumer>
  );
};

const styles = StyleSheet.create({
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#07374d',
    paddingVertical: 8,
    paddingLeft: 10,
  },
});

export default DrawerContent;
