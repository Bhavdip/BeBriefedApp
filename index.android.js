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
  constructor(props){
    super(props)
    this.state = {
      isUp:true,
      lastUpTime: new Date((new Date()).getTime() - 15*60*1000),
    }
  }
  render() {
    return (
      <MainContainer isUp={this.state.isUp} lastUpTime={this.state.lastUpTime}/>
    );
  }
}


AppRegistry.registerComponent('BeBriefedApp', () => BeBriefedApp);
