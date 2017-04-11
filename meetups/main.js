import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from './constants/colors'
import Root from './src/root'
import store from './src/store';

EStyleSheet.build(colors);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
