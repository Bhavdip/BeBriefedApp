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
      selectedService:'web',
      services:[
        { key:'web', isUp:true, lastUpTime:null},
        { key:'db', isUp:false, lastUpTime:new Date((new Date()).getTime() - 15*60*1000)},
        { key:'mail', isUp:true, lastUpTime:null},
      ],
    }

    this._switchServices = this._switchServices.bind(this)
  }
  _switchServices(nextService){
      this.setState({
        selectedService:nextService
      })
    }

  render() {
    return (
      <MainContainer
        selectedService = {this.state.selectedService}
        services = {this.state.services}
        onServiceChange = {this._switchServices}/>
    );
  }
}


AppRegistry.registerComponent('BeBriefedApp', () => BeBriefedApp);
