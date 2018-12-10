import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity , View, Text} from 'react-native'; 
import { inject, observer } from 'mobx-react/native';

import { images } from '../constants/images';
import { NavigationService } from '../api/NavigationService';

@inject('shoppingCartStore')
@observer
class ShoppingCartIcon extends Component {
  handlePress = () => {
    NavigationService.navigate('ShoppingCart');
  };

  render() {
    const { shoppingCartStore } = this.props;
    const { totalProducts } = shoppingCartStore;
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.btn}>
        <View style={{  marginRight: 16 }}  >
          <Image
            style={styles.img}
            resizeMode="contain"
            source={images.shoppingCart}
          />
        </View>
        {totalProducts > 0 && (
          <View
            style={{ top: -2, right: 10 ,  position:"absolute", backgroundColor:'red'}}
          
            circle={15}
           
            center
          >
            <Text color="white" bold size={8}>
              {totalProducts}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 25,
  },
  btn: {
    flex: 1,
    position: 'relative',
  },
});

export default ShoppingCartIcon;
