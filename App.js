/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Platform, 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';


import {
      createStackNavigator,
      createAppContainer
    } from 'react-navigation';
import Login from './app/components/Login/index';
import Dashboard from './app/components/Dashboard/index';
import Register from './app/components/Register/index'
import Home from './app/components/Home/index'
import Inventory from './app/components/Inventory/index'
import Profile from './app/components/Profile/index'
import BarcodeScan from './app/components/Scanner/index'
import ProductDetail from './app/components/ProductDetail/index'
import AddField from './app/components/AddField/index'
import Audit from './app/components/Audit/index'

type Props = {};
var NativeAppEventEmitter = require('RCTNativeAppEventEmitter');

const RootStack = createStackNavigator({
    home : Home,
    login : Login,
    dashboard : Dashboard,
    register : Register,
    inventory : Inventory,
    profile : Profile,
    scancode : BarcodeScan,
    productdetail : ProductDetail,
    addfield : AddField,
    audit : Audit,
      headerMode: 'none',
      mode: 'modal'
      
  });

AppRegistry.registerComponent('App', () => App);


const App = createAppContainer(RootStack);

export default App;




