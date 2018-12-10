import React, { Component } from 'react';
import { StatusBar,View, Text  } from 'react-native';

class StoresScreen extends Component {
  state = {};
  render() {
    return (
      <View style={{  flex: 1 }}  center>
        <StatusBar barStyle="light-content" />
        <Text>Stores Screen</Text>
      </View>
    );
  }
}

export default StoresScreen;
