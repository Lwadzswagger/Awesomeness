import React, { Component } from 'react';
import { StatusBar , View, Text } from 'react-native'; 

class ListScreen extends Component {
  state = {};
  render() {
    return (
      <View style={{  flex: 1  }}  center>
        <StatusBar barStyle="light-content" />
        <Text>List Screen</Text>
      </View>
    );
  }
}

export default ListScreen;
