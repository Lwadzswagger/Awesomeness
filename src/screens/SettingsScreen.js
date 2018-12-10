import React, { Component } from 'react';
import { StatusBar, ScrollView, View, Text } from 'react-native'; 
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';

import { theme } from '../constants/theme';
import ListColumn from '../commons/ListColumn';

const baseIconStyle = {
  size: 25,
  color: theme.color.grey,
};

const LINKS = [
  {
    link: 'EditUserInfo',
    title: 'Your name and email',
    icon: <EvilIcons name="user" {...baseIconStyle} />,
  },
  {
    link: 'Addresses',
    title: 'Addresses',
    icon: <EvilIcons name="location" {...baseIconStyle} />,
  },
];

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Account Settings',
  };
  state = {};
  render() {
    return (
      <View style={{  flex: 1,backgroundColor:'white'  }} 
       >
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          {LINKS.map(el => (
            <ListColumn link={el.link} key={el.title}>
              <ListColumn.Left>
                <View style={{  flexDirection: "row",alignItems:'center'  }} 
               >
                  <View style={{  flex:0.2 }}  >{el.icon}</View>

                  <View style={{  flex: 1 }} >
                    <Text>{el.title}</Text>
                  </View>
                </View>
              </ListColumn.Left>
              <ListColumn.Right>
                <MaterialIcons name="keyboard-arrow-right" {...baseIconStyle} />
              </ListColumn.Right>
            </ListColumn>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default SettingsScreen;
