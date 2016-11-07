/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class OverflowTest extends Component {
  render() {
    return (
      <View style={{ overflow: 'hidden', width: 100, height: 100 }}>
        <Image
          source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200×200&w=200&h=200' }}
          style={{ position: 'absolute', width: 200, height: 200 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OverflowTest', () => OverflowTest);
