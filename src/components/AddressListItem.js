import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react/native';

import { theme } from '../constants/theme';
import { NavigationService } from '../api/NavigationService';

@observer
class AddressListItem extends Component {
  state = {};

  handlePress = () => {
    NavigationService.navigate('EditAddress', { address: this.props.address });
  };

  render() {
    const { address } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View

          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            height: 50, paddingHorizontal: 16, justifyContent: "center",
            borderBottomColor: theme.color.grey,
          }}
        >
          <Text>{address.street}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default AddressListItem;
