import React, { Component } from 'react';
import {AppRegistry} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from './constants/colors'
import { HomeScreen } from './src/containers/home';

EStyleSheet.build(colors);

export default class client extends Component {

  render() {
     return <HomeScreen /> 
  }
}

AppRegistry.registerComponent('client', () => client);
