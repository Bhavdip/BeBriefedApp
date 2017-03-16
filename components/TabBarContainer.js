/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Tabs from 'react-native-tabs'
import TabBarItem from './TabBarItem'

const TabBarContainer = (props) => (
  <Tabs iconStyle={{ height: 72}} style={styles.tabContainer}>
    <TabBarItem name="web" label="web server" icon="server"/>
    <TabBarItem name="db" label="DB server" icon="database"/>
    <TabBarItem name="mail" label="Mail server" icon="envelope-o"/>
  </Tabs>
);

const styles = StyleSheet.create({
  tabContainer:{
    backgroundColor:'#343434',
    borderTopWidth:1,
    borderTopColor:'#262626',
    height:72,

  },
})

export default TabBarContainer;
