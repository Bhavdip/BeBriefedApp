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
    this._fetchServiceStatus = this._fetchServiceStatus.bind(this)
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

  componentDidMount(){
    setInterval(this._fetchServiceStatus,5000)
  }

  _fetchServiceStatus(){
    fetch('http://192.168.56.1:8080/status')
    .then(response => response.json())
    .then(data => {
      const nwState = this.state.servies.map(s =>(
        Object.assign(s, {
          
        })
      ))
      // this.setState( services: nwState})
    })
  }
}


AppRegistry.registerComponent('BeBriefedApp', () => BeBriefedApp);
