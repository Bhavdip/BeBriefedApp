/* @flow */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import StatusIndicator from './StatusIndicator'

class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusIndicator isUp={this.props.isUp}/>
        <Text style={styles.statusText}>Service Running {this.props.isUp ? 'Up' : 'Down!'}</Text>
      </View>
    );
  }
}

StatusIndicator.propTypes = {
  isUp:PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  statusText:{
    fontSize:20,
  }
});

export default StatusScreen
