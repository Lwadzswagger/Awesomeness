import React, { Component } from 'react';
import { StatusBar, ScrollView,  View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
 
import { inject } from 'mobx-react/native';
import {
  MaterialIcons,
  EvilIcons,
  Ionicons,
  Feather,
} from '@expo/vector-icons';

import CloseBtn from '../commons/CloseBtn';
import ListColumn from '../commons/ListColumn';
import { theme } from '../constants/theme';

const baseIconStyle = {
  size: 25,
  color: theme.color.grey,
};

const LINKS = [
  {
    link: 'Share',
    title: 'Invite friends',
    icon: <EvilIcons name="share-apple" {...baseIconStyle} />,
  },
  {
    link: 'Help',
    title: 'Help',
    icon: <Ionicons name="ios-help-circle-outline" {...baseIconStyle} />,
  },
  {
    link: 'About',
    title: 'About this app',
    icon: <Ionicons name="ios-information-circle-outline" {...baseIconStyle} />,
  },
  {
    link: 'Settings',
    title: 'Your accounts settings',
    icon: <Feather name="settings" {...baseIconStyle} />,
  },
];

@inject('authStore')
class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My Profile',
    headerLeft: (
      <CloseBtn left size={25} onPress={() => navigation.goBack(null)} />
    ),
  });
  state = {};
  render() {
    const { authStore } = this.props;
    return (
      <View style={{  flex: 1,backgroundColor:'white'  }} >
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <ListColumn>
            <ListColumn.Left>
              <Text size="xl" bold>
                Hi, {authStore.info.firstName}
              </Text>
            </ListColumn.Left>
            <ListColumn.Right>
              <View circle={50} avatar>
                <Image source={{ uri: authStore.info.avatarUrl }} />
              </View>
            </ListColumn.Right>
          </ListColumn>
          {LINKS.map(el => (
            <ListColumn link={el.link} key={el.title}>
              <ListColumn.Left>
                <View style={{  flexDirection: "row",alignItems:'center'  }} >
                  <View style={{  flex: 0.2}} >{el.icon}</View>

                  <View style={{  flex: 1  }} >
                    <Text>{el.title}</Text>
                  </View>
                </View>
              </ListColumn.Left>
              <ListColumn.Right>
                <MaterialIcons name="keyboard-arrow-right" {...baseIconStyle} />
              </ListColumn.Right>
            </ListColumn>
          ))}

          <TouchableOpacity style={styles.logoutBtn}>
            <Text bold color="green">
              Log out
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoutBtn: {
    borderWidth: 1,
    borderColor: theme.color.green,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 40,
    marginTop: 20,
  },
});

export default ProfileScreen;
