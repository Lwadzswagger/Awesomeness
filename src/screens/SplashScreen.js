import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import { inject } from 'mobx-react/native';


import  OnBoardingLogo   from './../commons/OnBoardingLogo';
import { NavigationService } from '../api/NavigationService';

@inject('authStore')
class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = async () => {
    await this.props.authStore.setupAuth();
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent:"center"}}>
        <OnBoardingLogo/>
      </View>
    );
  }
}

export default SplashScreen;
