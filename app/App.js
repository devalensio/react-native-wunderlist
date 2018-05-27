/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SwitchNavigator, StackNavigator } from 'react-navigation'

import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Login from './src/screens/Login';

export default class App extends Component<Props> {
  render() {
    return (
      <AuthStack />
    );
  }
}

const AuthStack = StackNavigator({
  Register: {
    screen: Register
  },
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
},{
  initialRouteName: 'Login'
})

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
