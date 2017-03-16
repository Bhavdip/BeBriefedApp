/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import MainContainer from './components/MainContainer'
const isUp = false

export default class BeBriefedApp extends Component {
  render() {
    return (
      <MainContainer isUp={isUp}/>
    );
  }
}


AppRegistry.registerComponent('BeBriefedApp', () => BeBriefedApp);
