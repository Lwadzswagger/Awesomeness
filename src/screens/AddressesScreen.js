import React, { Component } from 'react';
import {  View, Text ,StatusBar, StyleSheet, ActivityIndicator } from 'react-native'; 
import { EvilIcons } from '@expo/vector-icons';
import { inject, observer } from 'mobx-react/native';
import { observable, action, when } from 'mobx';

import { theme } from '../constants/theme';
import Button from '../commons/Button';
import HeaderBtn from '../commons/HeaderBtn';
import AddressListItem from '../components/AddressListItem';

@inject('authStore')
@observer
class AddressesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const headerRight = navigation.getParam('showAddBtn') ? (
      <HeaderBtn right onPress={navigation.getParam('handleAddAddressPress')}>
        <Text color="green">Add</Text>
      </HeaderBtn>
    ) : null;

    return {
      title: 'Addresses',
      headerRight,
    };
  };

  @observable
  isLoading = false;

  constructor(props) {
    super(props);

    when(
      () => !props.authStore.info.addressesIsEmpty,
      () => {
        this.setAddButton();
      },
    );
  }

  componentDidMount() {
    this.fetchAddresses();
  }

  @action.bound
  async fetchAddresses() {
    try {
      this.isLoading = true;
      await this.props.authStore.info.getAddresses();
      this.isLoading = false;
    } catch (error) {
      console.log('error', error);
    }
  }

  setAddButton = () => {
    this.props.navigation.setParams({
      showAddBtn: true,
      handleAddAddressPress: this.handleAddAddressPress,
    });
  };

  handleAddAddressPress = () => {
    this.props.navigation.navigate('CreateAddress');
  };

  renderIfEmpty = () => (
    <View   center 
    style={{  flex: 1,backgroundColor:'#fff', paddingHorizontal:24  }} >
      <StatusBar barStyle="dark-content" />
      <View center 
      style={{  marginBottom:24, }} 
     >
        <EvilIcons name="location" color={theme.color.black} size={200} />
      </View>
      <View center
      style={{  marginBottom:24 }} 
       >
        <Text bold size="lg">
          Add address
        </Text>
        <Text size="sm" color="greyLight">
          You haven't added an address yet.
        </Text>
      </View>
      <View style={{  width: 1 }} >
        <Button style={styles.button} onPress={this.handleAddAddressPress}>
          <Text bold color="white">
            Add address
          </Text>
        </Button>
      </View>
    </View>
  );

  render() {
    if (this.isLoading && this.props.authStore.info.addressesIsEmpty) {
      return (
        <View f={1} center style={{ backgroundColor:'#fff' }}>
          <ActivityIndicator color={theme.color.green} size="large" />
        </View>
      );
    }

    if (this.props.authStore.info.addressesIsEmpty) {
      return this.renderIfEmpty();
    }

    return (
      <View 
      style={{  flex: 1,backgroundColor:'#fff'  }} >
        <StatusBar barStyle="dark-content" />
        {this.props.authStore.info.addresses.map(address => (
          <AddressListItem key={address._id} address={address} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.green,
  },
});

export default AddressesScreen;
