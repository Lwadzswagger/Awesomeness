import React from 'react';
import   { Component } from 'react';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';


const AuthNavigator = createStackNavigator({
  Login: {
    getScreen: ()=> require('./../screens/LoginScreen').default,
  }
},{
    navigationOptions:{
      header:null
    }
  })


const AppNavigator = createSwitchNavigator(
  {
  Splash: {
    getScreen: ()=> require('./../screens/SplashScreen').default,
  },

   Auth:AuthNavigator,
   Main: MainTabNavigator,
},
 {
  initialRouteName: 'Splash'
 });


export default class navigation extends Component {
  state={}
  render(){
   return( <AppNavigator/>)
  }
}

//  createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

// });
