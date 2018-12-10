import React, { Component } from 'react'; 
import { StyleSheet, TouchableOpacity, View, Text  } from 'react-native';

import { theme } from '../constants/theme';

class LocationItem extends Component {
  state = {};

  handlePress = async () => {
    try {
      const res = await this.props.fetchDetails(this.props.place_id);

      this.props.searchAddress(res);
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View
   
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,width:1,
            borderBottomColor: theme.color.greyLight,
          }}
        >
          <View  
          style={{  padding: 10  }} >
            <Text>{this.props.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default LocationItem;
