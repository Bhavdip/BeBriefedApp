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
export default class BeBriefedApp extends Component {
  render() {
    return (
      <MainContainer/>
    );
  }
}
AppRegistry.registerComponent('BeBriefedApp', () => BeBriefedApp);
