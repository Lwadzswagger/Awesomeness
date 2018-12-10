import React, { PureComponent } from 'react';
import { View, Text , Image, TouchableOpacity, StyleSheet } from 'react-native'; 

import { tabBarIcons } from '../constants/images';

class TabItem extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName);
  };

  render() {
    const { routeName, isActive } = this.props;

    const icon = tabBarIcons[isActive ? 'active' : 'inactive'][routeName];
    return (
      <View  
      style={{  flex: 1,paddingTop:10  }} >
        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <View style={{  marginBottom: 3}} >
            <Image source={icon} />
          </View>
          <View>
            <Text size="xs" ls={0.12} color="greyDark" lowercase>
              {routeName}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabItem;
