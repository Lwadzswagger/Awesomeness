import React, { PureComponent } from 'react';
import {  View, Text ,Image, StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../constants/theme';
import { NavigationService } from '../api/NavigationService';

const Left = ({ children }) => (
  <View  
  style={{
    flex: 1,alignItems:'flex-start'
  }}
  >
    {children}
  </View>
);

const Right = ({ children }) => <View 
style={{
 alignItems:'flex-end'
}}

 >{children}</View>;

class ListColumn extends PureComponent {
  static Left = Left;
  static Right = Right;

  state = {};

  renderContent = () => (
    <View
    
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.color.greyLight,flexDirection:"row",padding:8,alignItems:'center', justifyContent:"center"
      }}
    >
      {this.props.children}
    </View>
  );

  handlePress = () => {
    NavigationService.navigate(this.props.link);
  };

  render() {
    if (this.props.link) {
      return (
        <TouchableOpacity onPress={this.handlePress}>
          {this.renderContent()}
        </TouchableOpacity>
      );
    }
    return this.renderContent();
  }
}

export default ListColumn;
