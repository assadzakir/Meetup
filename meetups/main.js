import Expo from 'expo';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from './constants/colors'
import   Root  from './src/root'

EStyleSheet.build(colors);

class App extends React.Component {
 render() {
     return <Root /> 
  }
}

Expo.registerRootComponent(App);
