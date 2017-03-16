/* @flow */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import StatusIndicator from './StatusIndicator'
import moment from 'moment'

class StatusScreen extends Component {
  render() {
    let lastUpCoponent
    if(!this.props.isUp){
      const relativeTime = moment().to(this.props.lastUpTime)
      lastUpCoponent = <Text style={styles.lastUpText}>Last up: {relativeTime}</Text>
    }
    return (
      <View style={styles.container}>
        <StatusIndicator isUp={this.props.isUp}/>
        <Text style={styles.statusText}>Service Running {this.props.isUp ? 'Up' : 'Down!'}</Text>
        {lastUpCoponent}
      </View>
    );
  }
}

StatusIndicator.propTypes = {
  isUp:PropTypes.bool.isRequired,
  lastUpTime: PropTypes.instanceOf(Date),
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  statusText:{
    fontSize:20,
  },
  lastUpText:{
    fontSize:20,
    marginTop:20,
    textAlign:'center',
    color:'#b1b3b6',
    backgroundColor:'rgba(0,0,0,0)',
  }
});

export default StatusScreen
